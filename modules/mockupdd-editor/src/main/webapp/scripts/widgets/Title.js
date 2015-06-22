var Title = Widget.extend("Title", {
  init : function(id) {
    this._super(id);
    PersistenceManager.addWidget(this);
  },

  __text: {init: "Title", label: "Title"},
  __color: {type: TYPES.Color, init: "gray", label:"Color"},
  __html:{visible: false, editable: false, serializable: false, init: "<h3>",
	  get: function() {
	    return $(this._html).text(this.getText()).attr("id", this.getId()).css("color", this.getColor())
	        .css("margin-top", "3px");
	  }
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
    var div = $("<div style='width:" + this.width + "; height:" + this.height + ";'></div>");
    div.attr("id", "container-" + this.getId());
    this.addEvents(div);
    div.append(element);
    $("#page").append(div);
    div.css("position", "absolute").css('left', this.getX()).css('top', this.getY());
  },
  doubleClick : function() {
    var form = new FormConstructor();
    form.addTextInput("Text", this.getText(), "title-text");
    form.addTextInput("Color", this.getColor(), "title-color");
    ModalConstructor.draw("Label", form.getContent(), this);
  },
  persist : function() {
    // No chequea datos.
    var text = $("#title-text").val();
    var element = $("#" + this.getId());
    this.setText(text);
    element.text(this.getText());
    color = $("#title-color").val();
    this.setColor(color);
    element.css("color", this.getColor());
    PersistenceManager.updateWidget(this);
  }
})
