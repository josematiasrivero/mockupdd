var BootstrapStyleView = TypeView.extend({
	init : function(value, id){
		this._super(value, id);
	},
	getOptions : function() {
		return this.options;
	},
	setOptions : function(options) {
		this.options = options;
		return this.options;
	},
	getView : function() {
		var input = "<select class='form-control'" + "id='" + this.getId() + "'>";
		for (var o in Styles.values) {
			input += "<option value'" + Styles.values[o] + "' ";
			if (this.getValue() === Styles.values[o]) {
				input += "selected='selected'";
			}
			input += ">" + Styles.values[o] + "</options>";
		}
		input += "</select>";
		return input;
	},
})