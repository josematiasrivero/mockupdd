var Button = Widget.extend("Button",{
  /**
   * Creates a button with style 'primary' and text 'Button' by default.
   */
  init : function(id) {
    this._super(id);
    this.setWidth("70px");
    this.setHeight("35px");
    PersistenceManager.addWidget(this);
  },

  __text: {init: "Button", label: "Text"},
  __style: {type: TYPES.BootstrapStyles, init: Styles.PRIMARY, label:"Style"},
  __html: {visible: false, editable:false, serializable: false, init: "<div class='btn'>", 
	  get: function() {
		    return $(this._html).text(this.getText()).attr("id", this.getId()).addClass("btn-" + this.getStyle()).css("width",
		            this.getWidth()).css("height", this.getHeight());
	  }
  },

  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
    element.resizable({
      autoHide : true,
      stop : $.proxy(function() {
        this.setWidth( $("#" + this.getId()).css('width'));
        this.setHeight($("#" + this.getId()).css('height'));
        PersistenceManager.updateWidget(this);
      }, this)
    }); // Make the element resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    element.removeClass('ui-resizable'); //Remove the dotted line
    element.draggable({
      stop : $.proxy(function() {
        this.setX($("#" + this.getId()).css('left'));
        this.setY($("#" + this.getId()).css('top'));
        PersistenceManager.updateWidget(this);
      }, this)
    }); //Make the element draggable, and when it stops modify the (x, y) value.
  },
  draw : function() {
    var element = this.getHtml();
    this.addEvents(element);
    $("#page").append(element);
    element.css("position", "absolute").css('left', this.getX()).css('top', this.getY());
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
     * The function .text remove the divs added by the .resizable() So we have
     * to add it again.
     */
    element.resizable('destroy');
    element.resizable({
      autoHide : true
    });
    element.removeClass('ui-resizable');
    element.removeClass("btn-" + this.getStyle());
    this.setStyle($("#button-style").val());
    element.addClass("btn-" + this.getStyle());
    PersistenceManager.updateWidget(this);
  }
})
