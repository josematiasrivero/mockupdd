var DeleteTagEditor = TagEditor.extend({

	init: function(model, element, rootElement) {
		this._super(model, element, rootElement);
		this.getContainer().addClass("mockupdd-action-tag");
	},
	
	buildEditContent: function(element) {
		return $('<div>deletes the <input class="mockupdd-tag-class-input"</div>');
	},
	
	buildReadContent: function(element) {
		return $('<div>deletes the <span class="mockupdd-tag-class"></span></div>');
	},
	
	saveDataToModel: function(element) {
		this.getModel().getParameters()["class"] = this.getEditContent().find('.mockupdd-tag-class-input').val();
		return true;
	},
	
	bindReadData: function(element) {
		this.getReadContent().find('.mockupdd-tag-class').html(this.getModel().getParameters()["class"]);
	},
	
	bindEditData: function(element) {
		this.getEditContent().find('.mockupdd-tag-class-input').val(this.getModel().getParameters()["class"]);
	}
	
});