var Label = Widget.extend("Label",{
  init : function(id) {
    this._super(id);
    this.setWidth("100px");
    this.setHeight("50px");
    PersistenceManager.addWidget(this);
  },
  __text : {init: "New label", label: "Text"},
  __color : {type: TYPES.Color, init: "black", color: "Color"},
  __fontSize : {type: TYPES.FontSize, init: "14px", label: "Font Size"},
  __html : {init: ("<label>"), visible: false, editable:false, serializable: false,
	 get: function() {
		    return $(this._html).text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
	        .css("font-size", this.getFontSize());
	  },
  },

  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
    element.resizable({
      autoHide : true,
      stop : $.proxy(function () {
        this.setWidth($("#container-" + this.getId()).css('width'));
        this.setHeight($("#container-" + this.getId()).css('height'));
        PersistenceManager.updateWidget(this);
      }, this)
    }); // Make the div resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    element.removeClass('ui-resizable'); // Remove the dotted line
    element.mouseover(function(){$(this).addClass('ui-widget-content')}); //Add the style when mouse over
    element.mouseout(function(){$(this).removeClass('ui-widget-content')}); //Remove the style when mouse over
    element.draggable({
      stop: $.proxy(function(){
        this.setX($("#container-" + this.getId()).css('left'));
        this.setY($("#container-" + this.getId()).css('top'));
        PersistenceManager.updateWidget(this);
      }, this)
    }); //Make the div draggable, and when it stops modify the (x, y) value.
  },
  draw : function() {
    var element = this.getHtml();
    var div = $("<div style='width:" + this.getWidth() + "; height:" + this.getHeight() + ";'></div>");
    div.attr("id", "container-" + this.getId());
    this.addEvents(div);
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute").css('left', this.getX()).css('top', this.getY());
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