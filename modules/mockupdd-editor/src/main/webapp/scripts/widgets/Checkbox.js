var Checkbox = Widget.extend("Checkbox",{
  /**
   * Creates a button with style 'primary' and text 'Button2' by default.
   */
  init : function(id) {
    this._super(id);
    this.setWidth("20px");
    this.setHeight("20px");
    this.setText("Checkbox");
  },

  __text: {type: TYPES.String, label: "Text", 
    set: function(value){
      this._text = value;
      if(this._dom != null)
        this._labelText.html(value);
    }},
  __html: {visible: false, editable:false, serializable: false, init: "<input type='checkbox'>", 
    get: function() {
      var label = $("<label>")
      var checkbox = $(this._html).css("height", "100%").css("width", "100%");
      this._labelText = $("<p>")
      this._labelText.html(this.getText());
      label.append(checkbox);
      label.append(this._labelText);
        return label;
    }
  },
  
  
  switchToEditMode: function(){
    this._super();
    this._dom.attr("tabindex","-1")
  },
  
  switchToRunMode: function(){
    this._super();
    this._dom.removeAttr("tabindex");
  },
  
  draw: function(){
    this._super();
  },
  
})
