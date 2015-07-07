var Title = Widget.extend("Title", {
  init : function(id) {
    this._super(id);
  },

  __text: {type: TYPES.String, init: "Title", label: "Title"},
  __color: {type: TYPES.Color, init: "gray", label:"Color"},
  __html:{visible: false, editable: false, serializable: false, init: "<h3>",
	  get: function() {
	    return $(this._html).text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
	        .css("margin-top", "3px");
	  }
  },

  persist : function() {
    // No chequea datos.
    var text = $("#title-text").val();
    var element = this._dom
    this.setText(text);
    element.text(this.getText());
    color = $("#title-color").val();
    this.setColor(color);
    element.css("color", this.getColor());
    MockupEditor.updateWidget(this);
  }
})
