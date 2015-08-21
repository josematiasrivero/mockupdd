var TypeView = Class.extend({
	init : function(value){
		this._value = this.copyEditingValue(value);
		this._dom = null;
		this._renderer=null;
	},
	
	setRenderer	 : function(renderer){
		this._renderer = renderer;
	},
	
	getValue : function() {
		return this._value;
	},
	setValue : function(value) {
		this._value = value;
		return this._value;
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