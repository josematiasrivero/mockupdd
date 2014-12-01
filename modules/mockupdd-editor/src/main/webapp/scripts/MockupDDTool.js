MockupDDTool = Class.extend({
	
	init: function() {
		this.serializer = new MockupDDModelSerializer();
		this.engine = new MockupDDEngine(new LocalStorageDataManager(), new LocalStoragePageContextManager());
		this.store = new MockupDDModelStore();
		this.model = null;
		this.editor = null;
		this.toolbox = null;
	},

	run: function() {
		var self = this;
		$(document).ready(function() {
			self.runNow();
		});
	},
	
	runNow: function() {
		var self = this;
		var url = self.computeUrl();
		var modelString = self.store.getModel(url);
		if (!modelString) {
			self.model = new MockupDDModel();
		} else {
			self.model = self.serializer.deserialize(self.engine, modelString);
		}
		if (window.location.search.match("mockupdd-run=1")) {
			self.engine.run();
		} else {
			var rootElement = $("body")[0];
			self.editor = new MockupDDEditor(self.model);
			self.toolbox = MockupDDToolbox.createDefault(self.engine, self.model, rootElement, self.editor);
			_.each(self.model.tags, function(tag) {
				var editor = self.editor.addTag(tag, $(tag.getSelector())[0], rootElement);
				editor.setReadMode();
			});
		}
	},
	
	computeUrl: function() {
		return window.location.href.substr(0, window.location.href.length - window.location.search.length);
	},
	
	saveModel: function() {
		this.store.saveModel(this.computeUrl(), this.serializer.serialize(this.model));
	},
	
	clearModel: function() {
		this.model = new MockupDDModel();
		this.saveModel();
	}
	
});