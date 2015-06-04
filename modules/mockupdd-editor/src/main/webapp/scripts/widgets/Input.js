widgetsName["Input"] = 'Input';
var Input = Widget.extend({
  init : function(id) {
    this._super(id);
    this.placeholder = "Placeholder";
    this.html = $("<div class='form-control'>");
    this.width = "150px";
    this.height = "50px";
    PersistenceManager.addWidget(this);
  },
  serialize : function() {
    var arr = [
        "Input",
        [ this.id, this.x.toString(), this.y.toString(), this.height.toString(),
            this.width.toString(), this.placeholder ] ];
    return arr;
  },
  unserialize : function(arr) {
    this.id = arr[0];
    this.x = arr[1];
    this.y = arr[2];
    this.height = arr[3];
    this.width = arr[4];
    this.placeholder = arr[5];
  },
  getPlaceholder : function() {
    return this.placeholder;
  },
  setPlaceholder : function(placeholder) {
    this.placeholder = placeholder;
    return this.placeholder;
  },
  getHtml : function() {
    return this.html.text(this.getPlaceholder()).attr("id", this.getId()).css("width", this.width).css("height", this.height);
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
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
    element.mouseover(function(){$(this).addClass('ui-widget-content')}); //Add the style when mouse over
    element.mouseout(function(){$(this).removeClass('ui-widget-content')}); //Remove the style when mouse over
    element.draggable({
      stop: $.proxy(function(){
        this.x = $("#" + this.getId()).css('left');
        this.y = $("#" + this.getId()).css('top');
        PersistenceManager.updateWidget(this);
      }, this)
    }); //Make the element draggable, and when it stops modify the (x, y) value.
    $("#page").append(element);
    element.css("position", "absolute").css('left', this.x).css('top', this.y);
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
    $("#delete-widget").click($.proxy(this.erase, this));
    $("#myModal").draggable();
    $("#myModal").modal('show');
  },
  persist : function() {
    // No chequea datos.
    var placeholder = $("#input-placeholder").val();
    var element = $("#" + this.getId());
    this.setPlaceholder(placeholder);
    element.text(this.getPlaceholder());
    /*
     * The function .text remove the divs added by the .resizable()
     * So we have to add it again.
     */
    element.resizable('destroy');
    element.resizable({autoHide: true});
    element.removeClass('ui-resizable');
    PersistenceManager.updateWidget(this);
  }
})
