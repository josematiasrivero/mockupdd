var Input = Widget.extend({
  init : function() {
    this._super();
    this.placeholder = "Placeholder";
    this.html = $("<div class='form-control'>");
  },
  getPlaceholder : function() {
    return this.placeholder;
  },
  setPlaceholder : function(placeholder) {
    this.placeholder = placeholder;
    return this.placeholder;
  },
  getHtml : function() {
    return this.html.text(this.getPlaceholder()).attr("id", this.getId()).css(
        "position", "absolute").css("width", "150px");
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
    $("#myModal .modal-title").html('Input');
    $("#myModal .modal-body").empty();
    $("#myModal .modal-body").html(
        '<div class="col-xs-9" style="margin: auto; float:left;">'
            + '<label class="col-xs-3 control-label">Placeholder</label>' + '<div class="col-xs-9">'
            + '<input type="text" id="input-placeholder" class="form-control" name="inputplaceholder" value="'
            + this.getPlaceholder() + '" />' + '</div>' + '</div>');
    $("#myModal .modal-body").css("height", "80px");
    $("#save-changes").click($.proxy(this.persist, this));
    $("#close").click($.proxy(function() {
      $("#save-changes").off("click");
    }, this));
    $("#myModal").draggable();
    $("#myModal").modal('show');
  },
  persist : function() {
    // No chequea datos.
    var placeholder = $("#input-placeholder").val();
    var element = $("#" + this.getId());
    this.setPlaceholder(placeholder);
    element.text(this.getPlaceholder());
  }
})
