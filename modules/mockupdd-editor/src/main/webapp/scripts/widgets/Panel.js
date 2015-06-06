widgetsName["Panel"] = 'Panel';
var Panel = Widget.extend({
  init : function(id) {
    this._super(id);
    this.header = "Header text";
    this.text = "Paragraph text";
    this.style = "info";
    this.fontSize = "14px";
    this.html = $("<div>");
    this.width = "300px";
    this.height = "200px";
    PersistenceManager.addWidget(this);
  },
  serialize : function() {
    var arr = [
        "Panel",
        [ this.id, this.x.toString(), this.y.toString(), this.height.toString(),
            this.width.toString(), this.header, this.text, this.style, this.fontSize ] ];
    return arr;
  },
  unserialize : function(arr) {
    this.id = arr[0];
    this.x = arr[1];
    this.y = arr[2];
    this.height = arr[3];
    this.width = arr[4];
    this.header = arr[5];
    this.text = arr[6];
    this.style = arr[7];
    this.fontSize = arr[8];
  },
  getHeader : function() {
    return this.header;
  },
  setHeader : function(header) {
    this.header = header;
    return this.header;
  },
  getText : function() {
    return this.text;
  },
  setText : function(text) {
    this.text = text;
    return this.text;
  },
  getStyle : function() {
    return this.style;
  },
  setStyle : function(style) {
    this.style = style;
    return this.style;
  },
  getFontSize : function() {
    return this.fontSize;
  },
  setFontSize : function(fontSize) {
    this.fontSize = fontSize;
    return this.fontSize;
  },
  getHtml : function() {
    return this.html.attr("id", this.getId());
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    var div = $("<div style='width:" + this.width + "; height:" + this.height + ";'></div>");
    div.attr("id", "container-" + this.getId());
    div.resizable({
      autoHide : true,
      stop : $.proxy(function () {
        this.width = $("#container-" + this.getId()).css('width');
        this.height = $("#container-" + this.getId()).css('height');
        PersistenceManager.updateWidget(this);
      }, this)
    }); // Make the div resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    div.removeClass('ui-resizable'); // Remove the dotted line
    div.mouseover(function(){$(this).addClass('ui-widget-content')}); //Add the style when mouse over
    div.mouseout(function(){$(this).removeClass('ui-widget-content')}); //Remove the style when mouse over
    div.draggable({
      stop: $.proxy(function(){
        this.x = $("#container-" + this.getId()).css('left');
        this.y = $("#container-" + this.getId()).css('top');
        PersistenceManager.updateWidget(this);
      }, this)
    }); //Make the div draggable, and when it stops modify the (x, y) value.
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
    div.css("position", "absolute").css('left', this.x).css('top', this.y);
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