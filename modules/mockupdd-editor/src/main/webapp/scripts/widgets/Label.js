widgetsName["Label"] = 'Label';
var Label = Widget.extend({
  init : function(id) {
    this._super(id);
    this.text = "New label";
    this.color = "black";
    this.fontSize = "14px";
    this.html = $("<label>");
    this.width = "100px";
    this.height = "50px";
    PersistenceManager.addWidget(this);
  },
  serialize : function() {
    var arr = [
        "Label",
        [ this.id, this.x.toString(), this.y.toString(), this.height.toString(),
            this.width.toString(), this.text, this.color, this.fontSize ] ];
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
    this.fontSize = arr[7];
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
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
        .css("font-size", this.getFontSize());
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
    element.resizable({
      autoHide : true,
      stop : $.proxy(function () {
        this.width = $("#container-" + this.getId()).css('width');
        this.height = $("#container-" + this.getId()).css('height');
        PersistenceManager.updateWidget(this);
      }, this)
    }); // Make the div resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    element.removeClass('ui-resizable'); // Remove the dotted line
    element.mouseover(function(){$(this).addClass('ui-widget-content')}); //Add the style when mouse over
    element.mouseout(function(){$(this).removeClass('ui-widget-content')}); //Remove the style when mouse over
    element.draggable({
      stop: $.proxy(function(){
        this.x = $("#container-" + this.getId()).css('left');
        this.y = $("#container-" + this.getId()).css('top');
        PersistenceManager.updateWidget(this);
      }, this)
    }); //Make the div draggable, and when it stops modify the (x, y) value.
  },
  draw : function() {
    var element = this.getHtml();
    var div = $("<div style='width:" + this.width + "; height:" + this.height + ";'></div>");
    div.attr("id", "container-" + this.getId());
    this.addEvents(div);
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute").css('left', this.x).css('top', this.y);
  },
  doubleClick : function() {
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "label-text")
    form.addTextInput("Color", this.getColor(), "label-color")
    form.addTextInput("Font size", this.getFontSize(), "label-font-size")
    ModalConstructor.draw("Label", form.getContent(), this);
  },
  persist : function() {
    // No chequea datos.
    var text = $("#label-text").val();
    this.setText(text);
    $("#" + this.getId()).text(this.getText());
    var color = $("#label-color").val();
    this.setColor(color);
    var fontSize = $("#label-font-size").val();
    this.setFontSize(fontSize);
    $("#" + this.getId()).css("color", this.getColor()).css("font-size", this.getFontSize());
    PersistenceManager.updateWidget(this);
  }
})