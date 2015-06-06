widgetsName["Title"] = 'Title';
var Title = Widget.extend({
  init : function(id) {
    this._super(id);
    this.text = "Title";
    this.color = "gray";
    this.html = $("<h3>");
    this.width = "100px";
    this.height = "50px";
    PersistenceManager.addWidget(this);
  },
  serialize : function() {
    var arr = [
        "Title",
        [ this.id, this.x.toString(), this.y.toString(), this.height.toString(),
            this.width.toString(), this.text, this.color ] ];
    return arr;
  },
  unserialize : function(arr) {
    this.id = arr[0];
    this.x = arr[1];
    this.y = arr[2];
    this.height = arr[3];
    this.width = arr[4];
    this.text = arr[5];
    this.color = arr[6];
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
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute").css('left', this.x).css('top', this.y);
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
