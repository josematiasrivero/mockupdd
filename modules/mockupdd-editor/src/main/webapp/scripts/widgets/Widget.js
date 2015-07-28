var Widget = Class.extend({
	
  //properties
  __id : {visible : false, editable : false, serializable : true, category: null},
  __x : {type:TYPES.Pixels, visible : false, editable : false, serializable : true, init:"0px",
	  label: "X",  category: "position"},
  __y : {type:TYPES.Pixels, visible : false, editable : false, serializable : true, init:"0px",
	  label: "Y",  category: "position"},
	  
  __y : {type:TYPES.String, visible : true, editable : true, serializable : true,
		  label: "name",  category: "behaviour"},
  
  __origin : {
	  visible : false, editable : false, serializable : false,  category: "position",
	  get : function(){
		  return [this.getX(), this.getY()];
	  },
  	  set : function(x,y){
  		  this.setX(x);
  		  this.setY(y);
  		  return this.getOrigin();
  	  }
  },
  
  __height : {visible : false, editable : false,
	  serializable : true, type:TYPES.Pixels, init: "100px", label: "Height",  category: "position"},
  __width : {visible : false, editable : false,
	  serializable : true, type:TYPES.Pixels, init: "50px", label: "Width",  category: "position"},
  
  init : function(id) {
    if (typeof id === 'undefined') {
      this.setId("Widget-id-" + IdGenerator.getNext());
    } else {
      this.setId(id);
    }
    this.__dom = null;
    MockupEditor.addWidget(this);
  },
  
  _resetDom: function(){
	    this._dom = $(this.getHtml())
	    this._dom.addClass("widget");
	    this._dom.css("margin",0)
	    this._innerWrapper.html(this._dom);
  },
  
  draw : function() {
	    var div = $("<div class='widget-wrapper'></div>");
	    div.css("width",this.getWidth());
	    div.css("height", this.getHeight())
	    this._addEvents(div);
	    $("#page").append(div);
	    div.css("position", "absolute").css('left', this.getX()).css('top', this.getY());
	    this._wrapper = div;
	    this._innerWrapper = $("<div />").css("height","100%").css("width","100%");
	    this._wrapper.append(this._innerWrapper);
	    this._resetDom();
  },
  
  switchToEditMode: function(){
	  this._resetDom();
	  this._wrapper.draggable("enable");
	  this._wrapper.resizable("enable");
  },
  
  switchToRunMode: function(){
	  this._resetDom();
	  this._wrapper.draggable("disable");
	  this._wrapper.resizable("disable");
  },
  
  _addEvents : function(element) {
    element.dblclick(MockupEditor.editModeOnlyFunction(this.doubleClick,this));
    element.resizable({
      autoHide : true,
      stop : $.proxy(function (event, ui) {
        this.setWidth(ui.size.width);
        this.setHeight(ui.size.height);
        MockupEditor.updateWidget(this);
      }, this)
    }); // Make the div resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    element.removeClass('ui-resizable'); // Remove the dotted line
    element.draggable({
      stop: $.proxy(function(event, ui){
        this.setX(ui.position.left);
        this.setY(ui.position.top);
        MockupEditor.updateWidget(this);
      }, this)
    }); //Make the div draggable, and when it stops modify the (x, y) value.
  },
  
  doubleClick : function() {
    var form = new FormConstructor();
    var metadata = this.getMetadata();
    for (var prop in metadata) {
    	if (metadata[prop].visible == true) {
    		var gg = this.getProperty(prop);
    		form.add(this.getWidgetType().toLowerCase(), prop.toLowerCase(), metadata[prop], this.getProperty(prop));
    	}
    }
    ModalConstructor.draw(this.getWidgetType(), form.getContent(), this);
  },
  
  serialize : function() {
	var repr = {}
	var metadata = this.getMetadata();
    for(var prop in metadata){
    	if(metadata[prop].serializable == true){
    		repr[prop] = this.getProperty(prop);
    	}
    }
    return repr;
  },
  unserialize : function(repr) {
	  for(prop in repr){
		  this.setProperty(prop,repr[prop]); //TODO, support complex properties.
	  }
  },
  
  /** Deletes the widget from the DOM. */
  erase : function() {
    // If it has a container parent, delete it (with the widget).
    if ($("#container-" + this.getId())[0] !== undefined) {
      $("#container-" + this.getId()).remove();
    } else {
      // else, delete only the widget.
      $("#" + this.getId()).remove();
    }
    PersistenceManager.deleteWidget(this);
  },
  persist : function() {
    // abstract method to be implemented in the subclasses
  }
})


Widget.unserialize = function(repr){
    var widget = new Widget.widgetTypes[repr.widgetType](repr.id);
    widget.unserialize(repr);
    return widget;
}

Widget._defaultMetadata = {
  visible : true,		//Whether this should be visible in the UI.
  editable : true,		//Whether this should be editable in the UI.
  serializable : true,	//Whether this should be serialized.
  category: "visual",
  type: TYPES.String
},

Widget.widgetTypes = {}; //This dictionary is going to have the functions to create the new labels
						 //For example, widgetsName["Label"] = Label;

Widget.extend = function(widgetName, prop) {
	prop.__widgetType =  {visible: false, editable:false, init:widgetName};
	for (var name in prop) {
		if (typeof prop[name] == "object" && name.startsWith("__")) {
			for (field in Widget._defaultMetadata) {
				if(prop[name][field] === undefined)
					prop[name][field] = Widget._defaultMetadata[field]; 
			}
		}
	}
	var ret = Class.extend.apply(this,[prop]);
	ret.extend = arguments.callee;
	ret.widgetType = widgetName;
	Widget.widgetTypes[widgetName] = ret;
	return ret;
}
