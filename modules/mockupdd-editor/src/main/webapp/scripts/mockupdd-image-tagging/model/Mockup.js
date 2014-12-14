Mockup = Class.extend({

	init: function(tags) {
		this._tags = tags || [];
	},
	
	addTag: function(tag) {
		this._tags.push(tag);
	},
	
	getTags: function() {
		return this._tags.concat();
	}
	
});
