var DataListTagEditor = TagEditor.extend({

	init: function(model, element, rootElement) {
		this._super(model, element, rootElement);
		this.getContainer().addClass("mockupdd-data-tag");
	},
	
	buildEditContent: function(element) {
		return $('<div>list of <input type="text"></input></div>');
	},
	
	buildReadContent: function(element) {
		return $('<div>list of <span></span></div>');
	},
	
	saveDataToModel: function(element) {
		this.getModel().getParameters()["class"] = this.getEditContent().find('input').val();
		return true;
	},
	
	bindReadData: function(element) {
		this.getReadContent().find('span').html(this.getModel().getParameters()["class"]);
	},
	
	bindEditData: function(element) {
		this.getEditContent().find('input').val(this.getModel().getParameters()["class"]);
	}	
	
});