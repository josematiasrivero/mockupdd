var MockupDDToolboxMenu = MockupDDToolboxItem.extend({

	init: function(description, creationFunction, items) {
		this._super(description, creationFunction);
		this.items = items;
	},
	
	renderOn: function(element) {
		var self = this;
		var menu = $('<ul class="mockupdd-tagger-menu">' + this.description + '</ul>');
		_.each(this.items, function(item) {
			var listItem = $('<li class="mockupdd-tagger-menu-item-container>');
			item.renderOn(listItem);
			menu.append(listItem);
		});
		menuItem.click(function() {
			self.creationFunction(self.model, self.element);
			self.notifyClickListeners();
		});
		$(element).append(menu);
	}
	
	
});