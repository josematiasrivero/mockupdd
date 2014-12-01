var MockupDDModel = ModelObject.extend({

	init: function() {
		this._super();
		this.tags = [];
		this.registerEvent('addTag');
	},
	
	addTag: function(tag) {
		if (this.tags.indexOf(tag) == -1) {
			this.tags.push(tag);
			tag.setMockupDDModel(this);
			this.notify('addTag', tag);
		}
	},
	
	removeTag: function(tag) {
		var index = this.tags.indexOf(tag);
		if (index != -1) {
			this.tags.splice(index, 1);
			tag.setMockupDDModel(null);
		}
	},
	
	getTags: function() {
		return this.tags.concat();
	}
	
});