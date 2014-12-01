var MockupDDToolboxItem = Class.extend({

	init: function(description, creationFunction, childItems, afterRenderCallback) {
		this.creationFunction = creationFunction;
		this.description = description;
		this.model = null;
		this.element = null;
		this.elementSelector = null;
		this.clickListeners = [];
		this.childItems = !childItems ? [] : childItems;
		this.afterRenderCallback = afterRenderCallback;
	},
	
	renderOn: function(element) {
		var self = this;
		var menuItem = $('<div class="mockupdd-tagger-menu-item">' + this.description + '</div>');
		menuItem.click(function() {
			self.creationFunction(self.model, self.element, self.elementSelector);
			self.notifyClickListeners();
		});
		$(element).append(menuItem);
		if (this.childItems.length > 0) {
			this.renderChildItems(this.childItems, element);
		};
		if (this.afterRenderCallback) {
			this.afterRenderCallback(menuItem);
		}
	},
	
	renderChildItems: function(items, element) {
		var self = this;
		var menu = $('<ul class="mockupdd-tagger-menu">');
		_.each(items, function(item) {
			var listItem = $('<li class="mockupdd-tagger-menu-item-container">');
			menu.append(listItem);
			item.renderOn(listItem);
		});
		$(element).mouseenter(function() {
			menu.show();
		});
		$(element).mouseleave(function() {
			menu.hide();
		});
		menu.hide();
		$(element).append(menu);
	},
	
	setContext: function(model, element, elementSelector) {
		this.model = model;
		this.element = element;
		this.elementSelector = elementSelector;
		_.each(this.childItems, function(item) {
			item.setContext(model, element, elementSelector);
		});
	},
	
	addClickListener: function(listener) {
		this.clickListeners.push(listener);
	},
	
	addClickListenerRecursively: function(listener) {
		this.addClickListener(listener);
		_.each(this.childItems, function(item) {
			item.addClickListenerRecursively(listener);
		});
	},
	
	notifyClickListeners: function() {
		_.each(this.clickListeners, function(callback) {
			callback();
		});
	},
	
	getChildItems: function() {
		return this.childItems;
	}
	
	
});