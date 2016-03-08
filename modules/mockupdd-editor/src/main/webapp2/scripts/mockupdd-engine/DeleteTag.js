var DeleteTag = Tag.extend({

	init: function(engine, selector, parameters) {
		this._super(engine, selector, parameters);
		this.registerJoinPoint('before', function(object) { return true});
	},
	
	getRequiredParameters: function() {
		return [];
	},
	
	run: function(context) {
		var self = this;
		this.object = context.object;
		$(this.getElement()).click(function() {
			if (self.runJoinPoint('before', [context.object])) {
				self.getEngine().getDataManager()["delete"](self.getParentTag().getParameters()["class"], context.object);	
			}
		});
	},
	
	getTagType: function() {
		return 'Action::Delete';
	},
	
	clone: function(newElement) {
		return this.copyJoinPointsTo(new DeleteTag(this.getEngine(), newElement, this.getParameters()));
	}

});
MockupDDEnvironment.registerTag(DeleteTag, 'Action::Delete');