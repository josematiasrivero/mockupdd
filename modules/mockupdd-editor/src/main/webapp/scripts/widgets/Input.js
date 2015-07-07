var Input = Widget.extend("Input",{
  init : function(id) {
    this._super(id);
    this.setWidth("150px");
    this.setHeight("30px");
  },
  
  __placeholder: {init: "Placeholder", label: "Placeholder"},
  __html: {visible: false, editable:false, serializable: false, init:"<input class='form-control'>",
	get: function() {
	    return $(this._html).attr('placeholder',this.getPlaceholder()).attr("id", this.getId()).css("width", "100%").css("height", "100%");
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
    form.addTextInput("Placeholder", this.getPlaceholder(), "input-placeholder");
    ModalConstructor.draw("Input", form.getContent(), this);
  },
  
  persist : function() {
    // No chequea datos.
    var placeholder = $("#input-placeholder").val();
    var element = this._dom;
    this.setPlaceholder(placeholder);
    this._dom.attr("placeholder",this.getPlaceholder())
    MockupEditor.updateWidget(this);
  }
})
