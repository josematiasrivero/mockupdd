var Panel = Widget.extend("Panel",{
  init : function(id) {
    this._super(id);

    this.setWidth("300px");
    this.setHeight("200px");

  },

  __header: {init: "Header text", label: "Header"},
  __text: {init: "Paragraph text", label: "Content"},
  __style: {init: "info", label: "Style", type: TYPES.BootstrapStyle},
  __fontSize: {init: "14px", label: "Font Size", type: TYPES.FontSize},
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
	    
	    return element;
	  },
  },

  doubleClick : function() {
    var form = new FormConstructor();
    form.addTextInput("Header text", this.getHeader(), "panel-header");
    form.addTextarea("Paragraph text", this.getText(), "panel-text");
    form.addTextInput("Font size", this.getFontSize(), "panel-font-size");
    form.addSelectInput("Style", this.getStyle(), Styles.panelValues, "panel-style");
    ModalConstructor.draw("Panel", form.getContent(), this);
  },
  persist : function() {
    // No chequea datos.
    var text = $("#panel-text").val();
    this.setText(text);
    var element = this._dom;
    element.find(".panel-body").html(this.getText());
    var header = $("#panel-header").val();
    this.setHeader(header);
    element.find(".panel-heading").html(this.getHeader());
    var fontSize = $("#panel-font-size").val();
    this.setFontSize(fontSize);
    element.css("font-size", this.getFontSize());
    element.removeClass("panel-" + this.getStyle());
    this.setStyle($("#panel-style").val());
    element.addClass("panel-" + this.getStyle());
    MockupEditor.updateWidget(this);
  }
})