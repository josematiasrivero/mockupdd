var TypeView = Class.extend({
	init : function(value, form){
		this._value = this.copyEditingValue(value);
		this._dom = null;
		this._form = form;
	},
	
	getValue : function() {
		return this._value;
	},
	setValue : function(value) {
		this._value = value;
		return this._value;
	},
	
	_openForm(form){
		this._form.openStackedForm(form);
	},
	
	isDirty : function(){
		return true; //Override in subclasses for efficiency
	},
	
	getDom : function() {
		return this._dom;
	},
	
	copyEditingValue: function(value){
		return value;
	}
})