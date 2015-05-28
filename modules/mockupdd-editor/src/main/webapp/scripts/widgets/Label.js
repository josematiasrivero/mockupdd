var Label = Widget.extend({
  init : function() {
    this._super();
    this.text = "";
    this.color = "black";
    this.fontSize = "14px";
    this.html = $("<label>");
    PersistenceManager.addWidget(this);
  },
  serialize : function() {
    arr = ["Label", [this.id, this.x.toString(), this.y.toString(), this.height.toString(), this.width.toString(), this.text, this.color, this.fontSize]];
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
    this.html = arr[8];
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
    $("#myModal .modal-body").html(
        '<div class="col-xs-9" style="margin: auto; float:left;">'
          + '<label class="col-xs-3 control-label">Text</label>'
          + '<div class="col-xs-9">'
            + '<input type="text" id="label-text" class="form-control" name="labeltext" value="'
              + this.getText()
            + '" />'
          + '</div>'
        + '</div>'
        + '<div class="col-xs-9" style="margin: 10px auto auto auto; float:left;">'
          + '<label class="col-xs-3 control-label">Color</label>'
          + '<div class="col-xs-9">'
            + '<input type="text" id="label-color" class="form-control" name="labelcolor" value="'
              + this.getColor()
            + '" />'
          + '</div>'
        + '</div>'
        + '<div class="col-xs-9" style="margin: 10px auto auto auto; float:left;">'
          + '<label class="col-xs-3 control-label">Font size</label>'
          + '<div class="col-xs-9">'
            + '<input type="text" id="label-font-size" class="form-control" name="labelfontsize" value="'
            + this.getFontSize() + '" />' 
          + '</div>' 
        + '</div>');
    $("#myModal .modal-body").css("height", "140px");
    $("#save-changes").click($.proxy(this.persist, this));
    $("#close").click($.proxy(function() {
      $("#save-changes").off("click");
    }, this));
    $("#myModal").draggable();
    $("#myModal").modal('show');
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    var div = $("<div class=\"ui-widget-content\" style=\"width:100px; height:50px;\"></div>");
    div.resizable();
    div.draggable();
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute");
  },
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId())
        .css("color", this.getColor()).css("font-size", this.getFontSize());
  },
  persist : function() {
    //No chequea datos.
    text = $("#label-text").val();
    this.setText(text);
    $("#" + this.getId()).text(this.getText());
    color = $("#label-color").val();
    this.setColor(color);
    fontSize = $("#label-font-size").val();
    this.setFontSize(fontSize);
    $("#" + this.getId()).css("color", this.getColor()).css("font-size", this.getFontSize());
    PersistenceManager.updateWidget(this);
  }
})