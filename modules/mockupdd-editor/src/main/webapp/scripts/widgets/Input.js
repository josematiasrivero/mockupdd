var Input = Widget.extend("Input",{
  init : function(id) {
    this._super(id);
    this.setWidth("150px");
    this.setHeight("50px");
    PersistenceManager.addWidget(this);
  },
  
  __placeholder: {init: "Placeholder", label: "Placeholder"},
  __html: {visible: false, editable:false, serializable: false, init:"<div class='form-control'>",
	get: function() {
	    return $(this._html).text(this.getPlaceholder()).attr("id", this.getId()).css("width", this.width).css("height", this.height);
	  }
  },
  addEvents : function(element) {
    element.dblclick($.proxy(this.doubleClick, this));
    element.resizable({
      autoHide : true,
      stop : $.proxy(function () {
        this.setWidth($("#" + this.getId()).css('width'));
        this.setHeight($("#" + this.getId()).css('height'));
        PersistenceManager.updateWidget(this);
      }, this)
    }); // Make the element resizable, but it'll hide when not mouseover.
        // Also when it stops modify the width and height values.
    element.removeClass('ui-resizable'); //Remove the dotted line
    element.mouseover(function(){$(this).addClass('ui-widget-content')}); //Add the style when mouse over
    element.mouseout(function(){$(this).removeClass('ui-widget-content')}); //Remove the style when mouse over
    element.draggable({
      stop: $.proxy(function(){
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
    element.css("width", this.getWidth()).css("height",this.getHeight())
  },
  doubleClick : function() {
    var form = new FormConstructor();
    form.addTextInput("Placeholder", this.getPlaceholder(), "input-placeholder");
    ModalConstructor.draw("Input", form.getContent(), this);
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
