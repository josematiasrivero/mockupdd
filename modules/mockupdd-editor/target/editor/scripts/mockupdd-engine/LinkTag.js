var LinkTag = Tag.extend({

	init: function(engine, selector, parameters) {
		this._super(engine, selector, parameters);
		this.registerJoinPoint('before', function(object) { return true});
	},
	
	getRequiredParameters: function() {
		return ["page"];
	},
	
	run: function(context) {
		var self = this;
		
		this.object = context.object;
		$(this.getElement()).click(function(e) {
			e.preventDefault();
			if (self.runJoinPoint('before', [self.object])) {
				if (self.getParentTag() != null && self.getParentTag().getTagType() == "Data::Data") {
					var destPageContext = {objects: {}};
					destPageContext.objects[self.getParentTag().getParameters()["class"]] = self.object;
					self.getEngine().getPageContextManager().createPageContext(destPageContext, function(context) {
						window.location = self.getParameters()["page"] + ".htm?mockupdd-run=1&mockupdd-page-context=" + context.id;
					});
				}
			}
		});
	},
	
	getTagType: function() {
		return 'Action::Link';
	},
	
	clone: function(newElement) {
		return this.copyJoinPointsTo(new LinkTag(this.getEngine(), newElement, this.getParameters()));
	}

});
MockupDDEnvironment.registerTag(LinkTag, 'Action::Link');