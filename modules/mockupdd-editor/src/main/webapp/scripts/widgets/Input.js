var Input = Widget.extend("Input",{
  init : function(id) {
    this._super(id);
    this.setWidth("150px");
    this.setHeight("30px");
  },
  
  __placeholder: {type: TYPES.String, init: "Placeholder", label: "Placeholder"},
  __placeholder: {init: "Placeholder", label: "Placeholder"},
  __html: {visible: false, editable:false, serializable: false, init:"<input class='form-control'>",
	get: function() {
	    return $(this._html).attr('placeholder',this.getPlaceholder()).attr("id", this.getId()).css("width", "100%").css("height", "100%");
	  }
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
