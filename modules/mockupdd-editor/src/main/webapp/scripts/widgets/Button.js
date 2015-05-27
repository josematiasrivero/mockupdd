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
    return this.putClassInHtml().text(this.getText()).attr("id", this.getId()).css("position",
        "absolute");
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
    element.draggable();
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    $("#page").append(element);
  },
  doubleClick : function() {
    $("#myModal .modal-title").empty();
    $("#myModal .modal-title").html('Button');
    $("#myModal .modal-body").empty();
    $("#myModal .modal-body").html(
        '<div class="col-xs-9" style="margin: auto; float:left;">'
            + '<label class="col-xs-3 control-label">Text</label>' + '<div class="col-xs-9">'
            + '<input type="text" id="button-text" class="form-control" name="button-text" value="'
            + this.getText() + '" />' + '</div>' + '</div>'
            + '<div class="col-xs-9" style="margin: 10px auto auto auto; float:left;">'
            + '<label class="col-xs-3 control-label">Style</label>' + '<div class="col-xs-9">'
            + '<input type="text" id="button-style" class="form-control" name="button-color" value="'
            + this.getStyle() + '" />' + '</div>' + '</div>');
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
    var element = $("#" + this.getId());
    var text = $("#button-text").val();
    this.setText(text);
    element.text(this.getText());
    style = $("#button-style").val();
    this.setStyle(style);
    this.putClassInHtml();
  }
})
