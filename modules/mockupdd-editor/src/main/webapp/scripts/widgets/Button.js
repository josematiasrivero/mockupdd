var Button = Widget.extend("Button",{
  /**
   * Creates a button with style 'primary' and text 'Button' by default.
   */
  init : function(id) {
    this._super(id);
    this.setWidth("70px");
    this.setHeight("35px");
  },

  __text: {init: "Button", label: "Text"},
  __style: {type: TYPES.BootstrapStyles, init: Styles.PRIMARY, label:"Style"},
  __html: {visible: false, editable:false, serializable: false, init: "<button class='btn'>", 
	  get: function() {
		    return $(this._html).text(this.getText()).attr("id", this.getId()).addClass("btn-" + this.getStyle()).css("width",
		            "100%").css("height", "100%");
	  }
  },
  
  switchToEditMode: function(){
	  this._super();
	  this._dom.attr("tabindex","-1")
  },
  
  switchToRunMode: function(){
	  this._super();
	  this._dom.removeAttr("tabindex");
  },

  doubleClick : function() {
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "button-text");
    form.addSelectInput("Style", this.getStyle(), Styles.values, "button-style");
    ModalConstructor.draw("Button", form.getContent(), this);
  },
  
  persist : function() {
    // No chequea datos.
    var element = this._dom
    var text = $("#button-text").val();
    this.setText(text);
    this._dom.text(this.getText());
    element.removeClass("btn-" + this.getStyle());
    this.setStyle($("#button-style").val());
    element.addClass("btn-" + this.getStyle());
    MockupEditor.updateWidget(this);
  }
})
