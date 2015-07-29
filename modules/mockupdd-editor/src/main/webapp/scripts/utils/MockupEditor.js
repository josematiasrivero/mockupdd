var MockupEditor = new (Class.extend({
  init : function() {
    this.widgets = {};
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
        var widget = Widget.unserialize(jsonData[i]);
        this.widgets[widget.getId()] = widget;
        widget.setMockupEditor(this);
        widget.draw();
      }
    }
	for(var id in this.widgets){
		this.widgets[id].switchToEditMode();
	}
    this.markClean();
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
    widget.setMockupEditor(this);
    this.numberOfWidgets++;
    this.markDirty()

  },
  updateWidget : function(widget) {
    this.widgets[widget.getId()] = widget;
    this.markDirty()
  },
  deleteWidget : function(widget) {
    delete this.widgets[widget.getId()];
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
		this.widgets[id].switchToRunMode();
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
