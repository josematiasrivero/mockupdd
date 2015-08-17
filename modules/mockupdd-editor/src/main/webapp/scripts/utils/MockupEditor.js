var MockupEditor = new (Class.extend({
  init : function() {
    this.widgets = {};
    this._widgetsFormRenderers = {};
    this.numberOfWidgets = 0;
    this.dirty = false;
	this._isInEditMode = true;
    // Calls saveMockup() every 5 seconds
    setInterval(this.editModeOnlyFunction(this.saveMockup, this), 5000);
  },
  
  loadMockup : function(id, name, json) {
	$("#page").empty();
	this.widgets = {};
    this.mockupId = id;
    this.mockupName = name;
    if (json) {
      var jsonData = JSON.parse(json);
      for (var i in jsonData) {
        var widget = Serializable.unserialize(jsonData[i]);
        this.widgets[widget.getId()] = widget;
        this._addEditionEvents(widget);
        widget.drawOn(this.getContainer());
      }
    }
    this.markClean();
  },
  
  _addEditionEvents : function(widget){
	  var wrapper = widget.getWrapper();
	  // Make the wrapper resizable, but it'll hide when not mouseover.
      // Also when it stops modify the width and height values.
	  wrapper.resizable({
		  autoHide : true,
		  stop : $.proxy(function (event, ui) {
		    widget.setWidth(ui.size.width);
		    widget.setHeight(ui.size.height);
		        this.updateWidget(widget);
		  }, this)
	  });
	  wrapper.removeClass('ui-resizable'); // Remove the dotted line
	  wrapper.draggable({
	      stop: $.proxy(function(event, ui){
	        widget.setX(ui.position.left);
	        widget.setY(ui.position.top);
	        this.updateWidget(widget);
	      }, this)
	  }); // Make the div draggable, and when it stops modify the (x, y) value.
	  //Add a modal form renderer with this widget as model.
	  this._widgetsFormRenderers[widget.getId()] = new ModalFormRenderer(wrapper,widget,"widget-edit-modal");
	  var self = this;
	  this._widgetsFormRenderers[widget.getId()].onClose(function(formRenderer){
		  self.updateWidget(formRenderer.getModel())
	  })
	  this._widgetsFormRenderers[widget.getId()].onDelete(function(formRenderer){
		  self.deleteWidget(formRenderer.getModel())
	  })
  },
  
  getContainer: function(){
	  return $("#page");
  },
  
  reloadMockup : function(){
	  MockupRESTClient.getMockup(this.mockupId,
		  function(json){
			  MockupEditor.loadMockup(json.id,json.name,json.jsonData);
		  }, function(){
			  alert("Could not reload mockup.");
		  }
	  )
  },
  
  saveMockup : function() {
    if (this.dirty) {
      var arr = new Array();
      for ( var w in this.widgets) {
        if (this.widgets.hasOwnProperty(w)) {
          arr.push(this.widgets[w].serialize());
        }
      }
      $("#persistence-state").html("Saving");
      MockupRESTClient.updateMockup(
          this.mockupId, 
          this.mockupName, 
          arr, 
          $.proxy(function() {
        	  this.markClean();
          }, this),
          $.proxy(function() {
            $("#persistence-state").html("Dirty");
            alert("Error when trying to connect with server.");
          }, this)
      );
    }
  },
  addWidget : function(widget) {
    this.widgets[widget.getId()] = widget;
    widget.drawOn(this.getContainer());
    this._addEditionEvents(widget);
    this.numberOfWidgets++;
    this.markDirty()

  },
  updateWidget : function(widget) {
    this.widgets[widget.getId()] = widget;
    this.markDirty()
  },
  deleteWidget : function(widget) {
    delete this.widgets[widget.getId()];
    widget.getWrapper().remove();
    this.numberOfWidgets--;
    this.markDirty()
  },
  
  isInEditMode: function(){
	return this._isInEditMode;
  },
	
  isInRunMode: function(){
	return !this._isInEditMode;
  },
	
  switchToEditMode: function(){
	this._isInEditMode = true;
	$("#page").addClass("edit-mode")
	$("#page").empty()
	this.reloadMockup();
  },
	
  switchToRunMode: function(){
	this._isInEditMode = false;
	for(var id in this.widgets){
		var wrapper = this.widgets[id].getWrapper();
		wrapper.draggable("destroy");
		wrapper.resizable("destroy");
	}
	$("#page").removeClass("edit-mode")
  },
  
  editModeOnlyFunction: function(fn,context){
	  return function(){
		  if(MockupEditor.isInEditMode()){
			  return fn.apply(context);
		  }
		  return;
	  }
  },
  
  runModeOnlyFunction: function(fn){
	  return function(){
		  if(MockupEditor.isInRunMode()){
			  return fn.apply(context);
		  }
		  return;
	  }
  },
  
  markDirty: function(){
	  $("#modeToggle").bootstrapToggle("disable");
	  this.dirty = true;
	  $("#persistence-state").html("Dirty");
  },
  
  markClean: function(){
      this.dirty = false;
      $("#persistence-state").html("Saved");
	  $("#modeToggle").bootstrapToggle("enable");
  }
  
  
  
}))();
