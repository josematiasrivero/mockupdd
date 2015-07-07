var Label = Widget.extend("Label",{
  init : function(id) {
    this._super(id);
    this.setWidth("100px");
    this.setHeight("50px");
  },
  __text : {type: TYPES.String, init: "New label", label: "Text"},
  __color : {type: TYPES.Color, init: "black", label: "Color"},
  __fontSize : {type: TYPES.FontSize, init: "14px", label: "Font Size"},
  __html : {init: ("<label>"), visible: false, editable:false, serializable: false,
	 get: function() {
		    return $(this._html).text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
	        .css("font-size", this.getFontSize());
	  },
  },

  persist : function() {
    // No chequea datos.
    var text = $("#label-text").val();
    this.setText(text);
    $("#" + this.getId()).text(this.getText());
    var color = $("#label-color").val();
    this.setColor(color);
    var fontSize = $("#label-fontsize").val();
    this.setFontSize(fontSize);
    $("#" + this.getId()).css("color", this.getColor()).css("font-size", this.getFontSize());
    PersistenceManager.updateWidget(this);
  }
})