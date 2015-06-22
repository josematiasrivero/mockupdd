var Panel = Widget.extend("Panel",{
  init : function(id) {
    this._super(id);

    this.setWidth("300px");
    this.setHeight("200px");
    PersistenceManager.addWidget(this);
  },

  __header: {init: "Header text", label: "Header"},
  __text: {init: "Paragraph text", label: "Content"},
  __style: {init: "info", label: "Style", type: TYPES.BootstraoStyle},
  __fontSize: {init: "14px", label: "Font Size", type: TYPES.FontSize},
  __html: {visible: false, editable: false, serializable: false, init: "<div>",
	get: function() {
	    return $(this._html).attr("id", this.getId());
	  },
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
    element.resizable({
      autoHide : true,
      stop : $.proxy(function () {
        this.setWidth($("#container-" + this.getId()).css('width'));
        this.setHeight($("#container-" + this.getId()).css('height'));
        PersistenceManager.updateWidget(this);
      }, this)
    }); // Make the div resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    element.removeClass('ui-resizable'); // Remove the dotted line
    element.mouseover(function(){$(this).addClass('ui-widget-content')}); //Add the style when mouse over
    element.mouseout(function(){$(this).removeClass('ui-widget-content')}); //Remove the style when mouse over
    element.draggable({
      stop: $.proxy(function(){
        this.setX($("#container-" + this.getId()).css('left'));
        this.setY($("#container-" + this.getId()).css('top'));
        PersistenceManager.updateWidget(this);
      }, this)
    }); //Make the div draggable, and when it stops modify the (x, y) value.
  },
  draw : function() {
    var element = this.getHtml();
    var div = $("<div style='width:" + this.getWidth()+ "; height:" + this.getHeight() + ";'></div>");
    div.attr("id", "container-" + this.getId());
    this.addEvents(div);
    element.addClass("panel panel-" + this.getStyle());
    element.css("height", "100%");
    var header = $("<div class='panel-heading'></div>");
    header.html(this.getHeader());
    element.append(header);
    var body = $("<div class='panel-body'></div>");
    body.html(this.getText());
    body.css("font-size", this.getFontSize());
    element.append(body);
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute").css('left', this.getX()).css('top', this.getY());
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
    var element = $("#" + this.getId());
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
    PersistenceManager.updateWidget(this);
  }
})