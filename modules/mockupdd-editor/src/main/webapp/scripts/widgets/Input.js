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
    return this.html.text(this.getPlaceholder()).attr("id", this.getId()).css("width", "150px");
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
    form.addTextInput("Placeholder", this.getPlaceholder(), "input-placeholder");
    $("#myModal .modal-body").html(form.getContent());
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
