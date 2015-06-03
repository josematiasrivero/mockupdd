widgetsName["Button"] = 'Button';
var Button = Widget.extend({
  /**
   * Creates a button with style 'primary' and text 'Button' by default.
   */
  init : function() {
    this._super();
    this.text = "Button";
    this.style = Styles.PRIMARY;
    this.html = $("<div class='btn'>");
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
    return this.putClassInHtml().text(this.getText()).attr("id", this.getId());
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    element.resizable({autoHide: true}); //Made the div resizable, but it'll hide when not mouseover
    element.removeClass('ui-resizable'); //Remove the dotted line
    //the line below break the resizable, for some reason
    element.css('white-space', 'pre-wrap');
    element.draggable();
    $("#page").append(element);
    element.css("position", "absolute");
  },
  doubleClick : function() {
    $("#myModal .modal-title").empty();
    $("#myModal .modal-title").html('Button');
    $("#myModal .modal-body").empty();
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "button-text");
    form.addTextInput("Style", this.getStyle(), "button-style");
    $("#myModal .modal-body").html(form.getContent());
    $("#myModal .modal-body").css("height", "100px");
    $("#save-changes").click($.proxy(this.persist, this));
    $("#delete-widget").click($.proxy(this.erase, this));
    $("#myModal").draggable();
    $("#myModal").modal('show');
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
  }
})
