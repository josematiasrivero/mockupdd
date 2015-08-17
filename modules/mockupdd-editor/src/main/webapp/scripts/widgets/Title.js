var Title = Widget.extend("Title", {
  init : function(id) {
    this._super(id);
  },

  __text: {type: TYPES.String, init: "Title", label: "Title",
	  set: function(value){
		  this._text = value;
		  if(this._dom != null){
			  this._dom.text(value);
		  }
	  }},
  __color: {type: TYPES.Color, init: "gray", label:"Color",
	  set: function(value){
		  this._color = value;
		  if(this._dom != null){
			  this._dom.css("color", value);
		  }
	  }},
  __html:{visible: false, editable: false, serializable: false, init: "<h3>",
	  get: function() {
	    return $(this._html).text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
	        .css("margin-top", "3px");
	  }
  },
})
