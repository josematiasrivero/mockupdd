var Widget = Serializable.extend("Widget",{
	
  // properties
  __id : {visible : false, editable : false, serializable : true, category: null},
  __x : {type:TYPES.Pixels, visible : false, editable : false, serializable : true, init:"0px",
	  label: "X",  category: "position",
	  set: function(val){
		  this._x=val;
		  if(this._wrapper != null)
			  this._wrapper.css('left', this.getX());
	  }},
  __y : {type:TYPES.Pixels, visible : false, editable : false, serializable : true, init:"0px",
	  label: "Y",  category: "position",
	  set: function(val){
		  this._y=val;
		  if(this._wrapper != null)
			  this._wrapper.css('top', this.getY());
	  }},
	  
  __name : {type:TYPES.String, visible : true, editable : true, serializable : true,
		  label: "Name",  category: "behaviour"},
		  
  __zindex : {type:TYPES.Number, visible : true, editable : true, serializable : true, init : 0,
	  label: "Z-Index",  category: "position", set: function(val){
		  this._zindex=val;
		  if(this._wrapper != null)
			  this._wrapper.css("z-index", val);
	  }},
  
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
	  serializable : true, type:TYPES.Pixels, init: "100px", label: "Height",  category: "position",
	  set: function(val){
		  this._height=val;
		  if(this._wrapper != null)
			  this._wrapper.css('height', this.getHeight());
	  }},
  __width : {visible : false, editable : false,
	  serializable : true, type:TYPES.Pixels, init: "50px", label: "Width",  category: "position",
	  set: function(val){
		  this._width=val;
		  if(this._wrapper != null)
			  this._wrapper.css('width', this.getWidth());
	  }},
  
  init : function(id) {
    if (typeof id === 'undefined') {
      this.setId("Widget-id-" + IdGenerator.getNext());
    } else {
      this.setId(id);
    }
    if( this.getName() == null){
    	this.setName(this.getId());
    }
    this._wapper=null;
    this._runMode=false;
    this._dom = this._resetDom();
  },
  
  _resetDom: function(){
	    var div = $("<div class='widget-wrapper'></div>");
	    div.css("width",this.getWidth());
	    div.css("height", this.getHeight())
	    div.css("position", "absolute").css('left', this.getX()).css('top', this.getY());
	    this._wrapper = div;
	    this._innerWrapper = $("<div />").css("height","100%").css("width","100%");
	    this._wrapper.append(this._innerWrapper);
	    this._dom = $(this.getHtml())
	    this._dom.addClass("widget");
	    this._dom.css("margin",0)
	    this._innerWrapper.html(this._dom);
	    return this._dom;
  },
  
  getWrapper: function(){
	  return this._wrapper;
  },
  
  drawOn : function(container){
	  container.append(this._wrapper);
  },
  
  /** Deletes the widget from the DOM. */
  erase : function() {
    if(this._wrapper){
    	this._wrapper.remove();
    }
  },
  
  switchToEditMode : function(){
	  this._runMode = false;
  },
  
  switchToRunMode : function(){
	  this._runMode = true;
  },
  
})


Widget.unserialize = function(repr){
    var widget = new Widget.widgetTypes[repr.widgetType](repr.id);
    widget.unserialize(repr);
    return widget;
}

Widget._defaultMetadata = {
  visible : true,		// Whether this should be visible in the UI.
  editable : true,		// Whether this should be editable in the UI.
  serializable : true,	// Whether this should be serialized.
  category: "visual",
  type: TYPES.String
},

Widget.widgetTypes = {}; // This dictionary is going to have the functions to
							// create the new labels
						 // For example, widgetsName["Label"] = Label;

Widget.extend = function(widgetName, prop) {
	prop.__widgetType =  {visible: false, editable:false, init:widgetName};
	var ret = Serializable.extend.apply(this,[widgetName,prop]); 
	Widget.widgetTypes[widgetName] = ret;
	return ret;
}
