var DataPropertyTagEditor = TagEditor.extend({

	init: function(model, element, rootElement) {
		this._super(model, element, rootElement);
		this.getContainer().addClass("mockupdd-data-tag");
	},
	
	buildEditContent: function(element) {
		return $('<div><input class="mockupdd-tag-class-input" type="text"></input>\'s <input type="text" class="mockupdd-tag-property-input"></div>');
	},
	
	buildReadContent: function(element) {
		return $('<div><span class="mockupdd-tag-class"></span>\'s <span class="mockupdd-tag-property"></span></div>');
	},
	
	saveDataToModel: function(element) {
		this.getModel().getParameters()["class"] = this.getEditContent().find('.mockupdd-tag-class-input').val();
		this.getModel().getParameters().property = this.getEditContent().find('.mockupdd-tag-property-input').val();
		return true;
	},
	
	bindReadData: function(element) {
		this.getReadContent().find('.mockupdd-tag-class').html(this.getModel().getParameters()["class"]);
		this.getReadContent().find('.mockupdd-tag-property').html(this.getModel().getParameters().property);
	},
	
	bindEditData: function(element) {
		this.getEditContent().find('.mockupdd-tag-class-input').val(this.getModel().getParameters()["class"]);
		this.getEditContent().find('.mockupdd-tag-property-input').val(this.getModel().getParameters().property);
	}	
	
});