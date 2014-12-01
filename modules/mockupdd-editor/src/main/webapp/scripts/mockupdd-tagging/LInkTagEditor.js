var LinkTagEditor = TagEditor.extend({

	init: function(model, element, rootElement) {
		this._super(model, element, rootElement);
		this.getContainer().addClass("mockupdd-action-tag");
	},
	
	buildEditContent: function(element) {
		return $('<div>navigate to <input type="text"></input> page </div>');
	},
	
	buildReadContent: function(element) {
		return $('<div>navigate to <span></span> page</div>');
	},
	
	saveDataToModel: function(element) {
		this.getModel().getParameters().page = this.getEditContent().find('input').val();
		return true;
	},
	
	bindReadData: function(element) {
		this.getReadContent().find('span').html(this.getModel().getParameters().page);
	},
	
	bindEditData: function(element) {
		this.getReadContent().find('input').html(this.getModel().getParameters().page);
	}	
	
});