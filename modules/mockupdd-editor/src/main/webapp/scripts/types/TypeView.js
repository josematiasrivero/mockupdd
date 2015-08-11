var TypeView = Class.extend({
	init : function(value, id){
		this.value = this.copyEditingValue(value);
	},
	
	getValue : function() {
		return this.value;
	},
	setValue : function(value) {
		this.value = value;
		return this.value;
	},
	
	isDirty : function(){
		return true; //Override in subclasses for efficiency
	},
	
	getDom : function() {
		//abstract method to be implemented in subclasses
	},
	
	copyEditingValue: function(value){
		return value;
	}
})