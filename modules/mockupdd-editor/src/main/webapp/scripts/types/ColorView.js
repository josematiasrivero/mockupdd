var ColorView = TypeView.extend({
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
		return "<input class='form-control' type='Text' style='" + this.getInputStyle()
        + "'id='" + this.getId() + "' value='" + this.getValue() + "'></input>";
	},
})