var BootstrapStyleView = TypeView.extend({
	init : function(value, id, options){
		this._super(value, id);
		this.options = options;
	},
	getOptions : function() {
		return this.options;
	},
	setOptions : function(options) {
		this.options = options;
		return this.options;
	},
	getView : function() {
		var input = "<select id='" + this.getId() + "'>";
		for (var o in options) {
			input += "<option value'" + this.options[o] + "' ";
			if (this.getValue() === this.options[o]) {
				input += "selected='selected'";
			}
			input += ">" + this.options[o] + "</options>";
		}
		input += "</select>";
		return input;
	},
})