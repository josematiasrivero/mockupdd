widgetsName["Label"] = 'Label';
var Label = Widget.extend({
  init : function() {
    this._super();
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
    $("#delete-widget").click($.proxy(this.erase, this));
    $("#myModal").draggable();
    $("#myModal").modal('show');
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
      autoHide : true
    }); // Made the div resizable, but it'll hide when not mouseover
    div.removeClass('ui-resizable'); // Remove the dotted line
    div.mouseover(function() {
      $(this).addClass('ui-widget-content')
    }); // Add the style when mouse over
    div.mouseout(function() {
      $(this).removeClass('ui-widget-content')
    }); // Remove the style when mouse over
    div.draggable({
      stop : $.proxy(function() {
        this.x = $("#container-" + this.getId()).css('left');
        this.y = $("#container-" + this.getId()).css('top');
      }, this)
    });
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute").css('left', this.x).css('top', this.y);
  },
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
        .css("font-size", this.getFontSize());
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