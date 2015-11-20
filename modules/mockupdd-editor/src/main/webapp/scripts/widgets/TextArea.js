var Input = Widget.extend("Input",{
  init : function(id) {
    this._super(id);
    this._valid
    this.setWidth("150px");
    this.setHeight("30px");
    this.setValidation(null)
  },
  
  __placeholder: {type: TYPES.String, init: "Placeholder", label: "Placeholder", init: "Placeholder",
	  set: function(value){
		  this._placeholder = value
		  if(this._dom != null){
			  this._dom.attr("placeholder", value);
		  }
	  }},
  __html: {visible: false, editable:false, serializable: false, init:"<input class='form-control'>",
	get: function() {
	    return $(this._html).attr('placeholder',this.getPlaceholder()).attr("id", this.getId()).css("width", "100%").css("height", "100%");
	  }
  },
  
  __validation: {label : "Validation", type: TYPES.Validation},
  
  triggerValidation(){
	  this.getValidation().validate(this.getValue())
  },
  
  getValue : function(){
	  return this._dom.val();
  },
  
  switchToEditMode: function(){
	  this._super();
	  this._dom.attr("tabindex","-1")
  },
  
  switchToRunMode: function(){
	  this._super();
	  this._dom.removeAttr("tabindex");
  },

})