var MockupDDEngine = Class.extend({

	init: function(dataManager, pageContextManager) {
		this.dataManager = dataManager;
		this.tags = [];
		this.nextTagClassId = 0;
		this.pageContextManager = pageContextManager;
	},
	
	getDataManager: function() {
		return this.dataManager;
	},
	
	getPageContextManager: function() {
		return this.pageContextManager;
	},
	
	createTagClassId: function() {
		return "_mockupdd_tag_class_" + this.nextTagClassId++;
	},
	
	addTag: function(tag) {
		this.tags.push(tag);
	},
	
	run: function() {
		this.tags = _.sortBy(this.tags, function(tag) { return $(tag.getElement()).parents().length });
		_.each(this.tags, function(tag) {
			tag.prepareToRun();
		});
		_.each(this.tags, function(tag) {
			if (tag.canRunStandalone()) {
				tag.runTag({});
			}
		});
	}

});