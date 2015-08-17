var Panel = Widget.extend("Panel",{
  init : function(id) {
    this._super(id);

    this.setWidth("300px");
    this.setHeight("200px");

  },

  __header: {type: TYPES.String, init: "Header text", label: "Header",
	  set: function(value){
		  this._header = value;
		  if(this._dom != null){
			  this._headerDom.html(value)
		  }
	  }},
  __text: {type: TYPES.Text, init: "Paragraph text", label: "Content",
	  set: function(value){
		  this._text = value;
		  if(this._dom != null){
			  this._bodyDom.html(value);
		  }
	  }},
  __style: {type: TYPES.BootstrapStyle, init: "info", label: "Style",
	  set: function(value){
		  this._style = value;
		  if(this._dom != null){
			  this._dom.attr("class", "panel panel-"+value);
		  }
	  }},
  __fontSize: {type: TYPES.FontSize, init: "14px", label: "Font Size",
	  set: function(value){
		  this._fontSize = value;
		  if(this._dom != null){
			  this._bodyDom.css("font-size", value);
		  }
	  }},
  __html: {visible: false, editable: false, serializable: false, init: "<div>",
	get: function() {

	    var element = $(this._html).attr("id", this.getId())
	    	.addClass("panel panel-" + this.getStyle())
	        .css("height", "100%");
	    
	    var header = $("<div class='panel-heading'></div>");
	    header.html(this.getHeader());
	    element.append(header);
	    
	    var body = $("<div class='panel-body'></div>");
	    body.html(this.getText());
	    body.css("font-size", this.getFontSize());
	    element.append(body);
	    this._headerDom = header;
	    this._bodyDom = body;
	    return element;
	  },
  },

})