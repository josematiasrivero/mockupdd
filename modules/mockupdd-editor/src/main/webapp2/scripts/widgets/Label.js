var Label = Widget.extend("Label",{
  init : function(id) {
    this._super(id);
    this.setWidth("100px");
    this.setHeight("50px");
  },
  __text : {type: TYPES.String, init: "New label", label: "Text",
	  set: function(value) {
		  this._text = value;
		  if(this._dom != null){
			  this._dom.html(value);
		  }
	  }},
  __color : {type: TYPES.Color, init: "black", label: "Color",
	  set:function(value){
		  this._color=value;
		  if(this._dom != null){
			  this._dom.css("color",value);
		  }
	  }},
  __fontSize : {type: TYPES.FontSize, init: "14px", label: "Font Size",
	  set: function(value){
		  this._fontSize = value;
		  if(this._dom != null){
			  this._dom.css("font-size", value);
		  }
	  }},
  __html : {init: ("<label>"), visible: false, editable:false, serializable: false,
	 get: function() {
		    return $(this._html).text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
	        .css("font-size", this.getFontSize());
	  },
  },

})