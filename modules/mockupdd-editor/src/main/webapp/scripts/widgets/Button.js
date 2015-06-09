widgetsName["Button"] = 'Button';
var Button = Widget.extend({
  /**
   * Creates a button with style 'primary' and text 'Button' by default.
   */
  init : function(id) {
    this._super(id);
    this.text = "Button";
    this.style = Styles.PRIMARY;
    this.html = $("<div class='btn'>");
    this.width = "70px";
    this.height = "35px";
    PersistenceManager.addWidget(this);
  },
  serialize : function() {
    var arr = [
        "Button",
        [ this.id, this.x.toString(), this.y.toString(), this.height.toString(),
            this.width.toString(), this.text, this.style ] ];
    return arr;
  },
  unserialize : function(arr) {
    this.id = arr[0];
    this.x = arr[1];
    this.y = arr[2];
    this.height = arr[3];
    this.width = arr[4];
    this.text = arr[5];
    this.style = arr[6];
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
  putClassInHtml : function() {
    for ( var style in Styles) {
      if (Styles.hasOwnProperty(style)) {
        this.html.removeClass("btn-" + Styles[style]);
      }
    }
    return this.html.addClass("btn-" + this.style);
  },
  getHtml : function() {
    return this.putClassInHtml().text(this.getText()).attr("id", this.getId()).css("width", this.width).css("height", this.height);
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
    element.resizable({
      autoHide : true,
      stop : $.proxy(function () {
        this.width = $("#" + this.getId()).css('width');
        this.height = $("#" + this.getId()).css('height');
        PersistenceManager.updateWidget(this);
      }, this)
    }); // Make the element resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    element.removeClass('ui-resizable'); //Remove the dotted line
    element.draggable({
      stop: $.proxy(function(){
        this.x = $("#" + this.getId()).css('left');
        this.y = $("#" + this.getId()).css('top');
        PersistenceManager.updateWidget(this);
      }, this)
    }); //Make the element draggable, and when it stops modify the (x, y) value.
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    $("#page").append(element);
    element.css("position", "absolute").css('left', this.x).css('top', this.y);
  },
  doubleClick : function() {
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "button-text");
    form.addSelectInput("Style", this.getStyle(), Styles.values, "button-style");
    ModalConstructor.draw("Button", form.getContent(), this);
  },
  persist : function() {
    // No chequea datos.
    var element = $("#" + this.getId());
    var text = $("#button-text").val();
    this.setText(text);
    element.html(this.getText());
    /*
     * The function .text remove the divs added by the .resizable()
     * So we have to add it again.
     */
    element.resizable('destroy');
    element.resizable({autoHide: true});
    element.removeClass('ui-resizable');
    this.setStyle($("#button-style").val());
    this.putClassInHtml();
    PersistenceManager.updateWidget(this);
  }
})
