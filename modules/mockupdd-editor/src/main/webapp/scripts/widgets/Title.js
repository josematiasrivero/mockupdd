var Title = Widget.extend({
  init : function() {
    this._super();
    this.text = "Title";
    this.color = "gray";
    this.html = $("<h3>");
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
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
        .css("margin-top", "3px");
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    var div = $("<div style='width:100px; height:50px;'></div>");
    div.resizable({autoHide: true}); //Made the div resizable, but it'll hide when not mouseover
    div.removeClass('ui-resizable'); //Remove the dotted line
    div.mouseover(function(){$(this).addClass('ui-widget-content')}); //Add the style when mouse over
    div.mouseout(function(){$(this).removeClass('ui-widget-content')}); //Remove the style when mouse over
    div.draggable();
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute");
  },
  doubleClick : function() {
    $("#myModal .modal-title").empty();
    $("#myModal .modal-title").html('Input');
    $("#myModal .modal-body").empty();
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "title-text");
    form.addTextInput("Color", this.getColor(), "title-color");
    $("#myModal .modal-body").html(form.getContent());
    $("#myModal .modal-body").css("height", "100px");
    $("#save-changes").click($.proxy(this.persist, this));
    $("#close").click($.proxy(function() {
      $("#save-changes").off("click");
    }, this));
    $("#myModal").draggable();
    $("#myModal").modal('show');
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
  }
})
