var Button = Widget.extend("Button",{
  /**
   * Creates a button with style 'primary' and text 'Button' by default.
   */
  init : function(id) {
    this._super(id);
    this.setWidth("70px");
    this.setHeight("35px");
    this.setText("Button");
    this.setStyle(Styles.PRIMARY);
    this.setClickEvent(new Event());
  },

  __text: {type: TYPES.String, label: "Text", 
	  set: function(value){
		  this._text = value;
		  if(this._dom != null)
			  this._dom.html(value);
	  }},
  __style: {type: TYPES.BootstrapStyle, label:"Style",
	  set: function(value){
		  this._style=value;
		  if(this._dom != null)
			  this._dom.attr("class","widget btn btn-"+value)
	  }
	 
  },
  __html: {visible: false, editable:false, serializable: false, init: "<button class='widget btn'>", 
	  get: function() {
		    return $(this._html).text(this.getText()).attr("id", this.getId()).addClass("btn-" + this.getStyle()).css("width",
		            "100%").css("height", "100%");
	  }
  },
  
  __clickEvent : {type:TYPES.Event, label: "Click"},
  
  switchToEditMode: function(){
	  this._super();
	  this._dom.attr("tabindex","-1")
  },
  
  switchToRunMode: function(){
	  this._super();
	  this._dom.removeAttr("tabindex");
  },
  
  draw: function(){
	  this._super();
  },
  
})
