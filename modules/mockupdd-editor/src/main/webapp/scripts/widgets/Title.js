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
    var div = $("<div class='ui-widget-content' style='width:100px; height:50px;'></div>");
    div.resizable();
    div.draggable();
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute");
  },
  doubleClick : function() {
    $("#myModal .modal-title").empty();
    $("#myModal .modal-title").html('Input');
    $("#myModal .modal-body").empty();
    $("#myModal .modal-body").html(
        '<div class="col-xs-9" style="margin: auto; float:left;">'
            + '<label class="col-xs-3 control-label">Text</label>' + '<div class="col-xs-9">'
            + '<input type="text" id="title-text" class="form-control" name="titletext" value="'
            + this.getText() + '" />' + '</div>' + '</div>'
            + '<div class="col-xs-9" style="margin: 10px auto auto auto; float:left;">'
            + '<label class="col-xs-3 control-label">Color</label>' + '<div class="col-xs-9">'
            + '<input type="text" id="title-color" class="form-control" name="titlecolor" value="'
            + this.getColor() + '" />' + '</div>' + '</div>');
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
