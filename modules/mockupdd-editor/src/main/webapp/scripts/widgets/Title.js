var Title = Widget.extend("Title", {
  init : function(id) {
    this._super(id);
    PersistenceManager.addWidget(this);
  },

  __text: {init: "Title", label: "Title"},
  __color: {type: TYPES.Color, init: "gray", label:"Color"},
  __html:{visible: false, editable: false, serializable: false, init: "<h3>",
	  get: function() {
	    return $(this._html).text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
	        .css("margin-top", "3px");
	  }
  },


  doubleClick : function() {
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "title-text");
    form.addTextInput("Color", this.getColor(), "title-color");
    ModalConstructor.draw("Label", form.getContent(), this);
  },
  persist : function() {
    // No chequea datos.
    var text = $("#title-text").val();
    var element = $("#" + this.getId());
    this.setText(text);
    element.text(this.getText());
    color = $("#title-color").val();
    this.setColor(color);
    element.css("color", this.getColor());
    PersistenceManager.updateWidget(this);
  }
})
