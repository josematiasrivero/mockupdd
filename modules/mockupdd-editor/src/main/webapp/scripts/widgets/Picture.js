var Picture = Widget.extend("Picture",{
	/**
	* Creates a picture with an initial size of 200x100, and let's you set it with an URL field.
	*/
  init : function(id) {
    this._super(id);
    this.setHeight('100px');
	this.setWidth('200px');
  },
__url : {type: TYPES.String, init: "http://placehold.it/200x100", label: "Url",
	  set: function(value) {
		  this._url = value;
		  if(this._dom != null){
			  (this._dom).attr("src", value);
		  }
	  }},

  __html : {init: ("<img>"), visible: false, editable:false, serializable: false,
	 get: function() {
		    return $(this._html).attr("src",this.getUrl()).attr("id", this.getId()).css('height', '100%').css('width', '100%');
	  },
  },

})
