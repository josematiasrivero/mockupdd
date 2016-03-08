var MockupDDModelSerializer = Class.extend({

	serialize: function(model) {
		var serializedTags = [];
		_.each(model.getTags(), function(tag) {
			serializedTags.push({type: tag.getTagType(), selector: tag.getSelector(), parameters: tag.getParameters()}); 
		});
		return JSON.stringify({tags: serializedTags});
	},

	deserialize: function(engine, serializedTags) {
		var tags = [];
		var model = new MockupDDModel();
		_.each(JSON.parse(serializedTags).tags, function(tag) {
			var klass = MockupDDEnvironment.getTagByType(tag.type);
			tags.push(new klass(engine, tag.selector, tag.parameters));
		})
		_.each(tags, function(tag) {
			model.addTag(tag);
		});
		return model;
	}

});