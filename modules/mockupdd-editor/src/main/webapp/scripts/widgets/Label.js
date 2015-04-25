ver Label = Widget.extend({
	init: function() {
		this._super();
		this.text = "";
	},
	getText: function() {
		return this.text;
	},
	setText: function(text) {
		this.text = text;
		return this.text;
	}
})
