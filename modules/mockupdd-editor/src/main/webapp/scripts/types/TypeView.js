var TypeView = Class.extend({
	init : function(value, id){
		this.value = this.copyEditingValue(value);
		this.id = id;
	    this.inputStyle = "";
	},
	getValue : function() {
		return this.value;
	},
	setValue : function(value) {
		this.value = value;
		return this.value;
	},
	getId : function() {
		return this.id;
	},
	setId : function(id) {
		this.id = id;
		return this.id;
	},
	getInputStyle : function() {
	  return this.inputStyle;
	},
	setInputStyle : function(style) {
	  this.inputStyle = style;
	  return this.inputStyle;
	},
	getView : function() {
		//abstract method to be implemented in subclasses
	},
	
	copyEditingValue: function(value){
		return value;
	}
})