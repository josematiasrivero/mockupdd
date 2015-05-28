var Label = Widget.extend({
  init : function() {
    this._super();
    this.text = "";
    this.color = "black";
    this.fontSize = "14px";
    this.html = $("<label>");
  },
  getText : function() {
    return this.text;
  },
  setText : function(text) {
    this.text = text;
    return this.text;
  },
  getColor : function() {
    return this.color;
  },
  setColor : function(color) {
    this.color = color;
    return this.color;
  },
  getFontSize : function() {
    return this.fontSize;
  },
  setFontSize : function(fontSize) {
    this.fontSize = fontSize;
    return this.fontSize;
  },
  doubleClick : function() {
    $("#myModal .modal-title").empty();
    $("#myModal .modal-title").html('Label');
    $("#myModal .modal-body").empty();
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "label-text")
    form.addTextInput("Color", this.getColor(), "label-color")
    form.addTextInput("Font size", this.getFontSize(), "label-font-size")
    $("#myModal .modal-body").html(form.getContent());
    $("#myModal .modal-body").css("height", "140px");
    $("#save-changes").click($.proxy(this.persist, this));
    $("#close").click($.proxy(function() {
      $("#save-changes").off("click");
    }, this));
    $("#myModal").draggable();
    $("#myModal").modal('show');
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    var div = $("<div class=\"ui-widget-content\" style=\"width:100px; height:50px;\"></div>");
    div.resizable();
    div.draggable();
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute");
  },
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
        .css("font-size", this.getFontSize());
  },
  persist : function() {
    // No chequea datos.
    debugger;
    text = $("#label-text").val();
    this.setText(text);
    $("#" + this.getId()).text(this.getText());
    color = $("#label-color").val();
    this.setColor(color);
    fontSize = $("#label-font-size").val();
    this.setFontSize(fontSize);
    $("#" + this.getId()).css("color", this.getColor()).css("font-size", this.getFontSize());
  }
})