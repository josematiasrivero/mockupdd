var TextArea = Widget.extend("TextArea",{
  init : function(id) {
    this._super(id);
    this._valid
    this.setWidth("300px");
    this.setHeight("70px");
    this.setValidation(null);
  },
  
  __placeholder: {type: TYPES.String, init: "Placeholder", label: "Placeholder", init: "This is a Text Area",
	  set: function(value){
		  this._placeholder = value
		  if(this._dom != null){
			  this._dom.attr("placeholder", value);
		  }
	  }},
  __html: { visible: false, editable:false, serializable: false, init:"<textarea class='form-control'>",
	get: function() {
	    return $(this._html).attr('placeholder',this.getPlaceholder()).attr("id", this.getId()).css("width", "100%").css("height", "100%");
	  }
  },
  
  __validation: {label : "Validation", type: TYPES.Validation},
  
  triggerValidation(){
	  this.getValidation().validate(this.getValue());
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