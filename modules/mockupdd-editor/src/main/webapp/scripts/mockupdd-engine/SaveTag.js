var SaveTag = Tag.extend({

	init: function(engine, selector, parameters) {
		this._super(engine, selector, parameters);
		this.registerJoinPoint('before', function(object) { return true});
	},
	
	getRequiredParameters: function() {
		return [];
	},
	
	run: function() {
		var self = this;
		$(this.getElement()).click(function(e) {
			e.preventDefault();
			var object = self.getSourceTag().createObject();
			if (self.runJoinPoint('before', [object])) {
				if (self.getSourceTag().getParameters().dataPath) {
					self.getSourceTag().getParentTag().getData()[self.getSourceTag().getParameters().dataPath].push(object);
					self.getEngine().getDataManager().save(self.getSourceTag().getParentTag().getParameters()["class"], self.getSourceTag().getParentTag().getData(), function() { 
						self.getSourceTag().cleanFields();
					});
				} else {
					self.getEngine().getDataManager().save(self.getSourceTag().getParameters()["class"], object, function() { 
						self.getSourceTag().cleanFields();
					});	
				}
			}
		});
	},
	
	getSourceTag: function() {
		return this.getParentTag();
	},
	
	canRunStandalone: function() {
		return true;
	},
	
	getTagType: function() {
		return 'Action::Save';
	},
	
	clone: function(newElement) {
		return this.copyJoinPointsTo(new DeleteTag(this.getEngine(), newElement, this.getParameters()));
	}

});
MockupDDEnvironment.registerTag(SaveTag, 'Action::Save');