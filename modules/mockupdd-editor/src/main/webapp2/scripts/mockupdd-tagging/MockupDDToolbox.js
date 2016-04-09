var MockupDDToolbox = Class.extend({

	init: function(model, rootElement) {
		this.rootElement = rootElement;
		this.toolboxItems = [];
		var self = this;
		this.model = model;
		this.prevElement = null;
		
		$(rootElement).find('div,tr,td,span,input,button,form').mouseenter(function(e) {
			$(this).addClass("mockupdd-tagger-highlighted-element");
			$(self.prevElement).removeClass("mockupdd-tagger-highlighted-element");
			self.prevElement = this;
			e.stopPropagation();
		});
		$(rootElement).find('div,tr,td,span,input,button,form').click(function(e) {
			var element = this;
			self.showMenuOver(this);
			e.stopPropagation();
			e.preventDefault();
		});
		this.renderOn(rootElement);
	},
	
	renderOn: function(element) {
		var self = this;
		this.menuEntries = $('<ul class="mockupdd-tagger-menu">');
		this.overlay = $('<div class="mockupdd-tagger-selected-overlay">');
		$(this.rootElement).append(this.overlay);
		$(this.rootElement).append(this.menuEntries);
		_.each(this.getToolboxItems(), function(toolboxItem) {
			self.renderToolboxItem(toolboxItem);
		});	
		this.menuEntries.hide();
	},
	
	showMenuOver: function(element) {
		var self = this;
		this.currentElement = element;
		this.menuEntries.fadeOut(100, function() {
			var position = $(element).position();
			self.menuEntries.css({left: position.left, top: position.top + $(element).height()});
			self.overlay.show();
			self.overlay.css({left: position.left, top: position.top, width: $(element).width(), height: $(element).height()});
			self.menuEntries.fadeIn(100);
		});
		_.each(this.toolboxItems, function(toolboxItem) {
			toolboxItem.setContext(self.model, element, self.pathFromElement(element));
		});
	},
	
	cancelSelection: function() {
		this.overlay.hide();
		this.menuEntries.fadeOut(100);
	},
	
	selectParentElement: function() {
		if ($(this.currentElement).parent()) {
			this.showMenuOver($(this.currentElement).parent());
		}
	},
	
	renderToolboxItem: function(toolboxItem) {
		var itemContainer = $('<li class="mockupdd-tagger-menu-item">');
		this.menuEntries.append(itemContainer);
		toolboxItem.renderOn(itemContainer);
	},
	
	addToolboxItem: function(toolboxItem) {
		var self = this;
		this.toolboxItems.push(toolboxItem);
		this.renderToolboxItem(toolboxItem);
		toolboxItem.addClickListenerRecursively(function() {
			self.cancelSelection();
		});
	},

	getToolboxItems: function() {
		return this.toolboxItems.concat();
	},
	
	pathFromElement: function(element) {
		var e = $(element);
		var path = "";
		while (e.parent().length > 0) {
			if (e.attr('id')) {
				path = "#" + e.attr('id') + " " + path;
				return path;
			}
			var i = e.parent().children().filter(e[0].nodeName).toArray().indexOf(e[0]);
			path = " > " + e[0].nodeName.toLowerCase() + ":eq(" + i + ") " + path;
			e = e.parent();
		}
		return path;
	}
	
});

MockupDDToolbox.utils = {};
MockupDDToolbox.utils.addDataClass = function(element) { $(element).parent().addClass("mockupdd-data-tag") };
MockupDDToolbox.utils.addActionClass = function(element) { $(element).parent().addClass("mockupdd-action-tag") };

MockupDDToolbox.createDefault = function(engine, model, rootElement, mockupDDEditor) {
	var toolbox = new MockupDDToolbox(model, rootElement);
	toolbox.addToolboxItem(new MockupDDToolboxItem("[cancel]", function(model, element, elementSelector) {
		toolbox.cancelSelection();
	}));
	toolbox.addToolboxItem(new MockupDDToolboxItem("[up]", function(model, element, elementSelector) {
		toolbox.selectParentElement();
	}));
	toolbox.addToolboxItem(new MockupDDToolboxItem("What is this element?", function(model, element, elementSelector) {}, [
		new MockupDDToolboxItem("a list of (object) ...", function(model, element, elementSelector) {
			mockupDDEditor.addTag(new DataTag(engine, elementSelector, {"class": "Class", isList: true}), element, rootElement);
		}, [], MockupDDToolbox.utils.addDataClass),
		new MockupDDToolboxItem("a/an (object) ...", function(model, element, elementSelector) {
			mockupDDEditor.addTag(new DataTag(engine, elementSelector, {"class": "Class"}), element, rootElement);
		}, [], MockupDDToolbox.utils.addDataClass),
		new MockupDDToolboxItem("an (attribute/property) of an (object)", function(model, element, elementSelector) {
			mockupDDEditor.addTag(new DataTag(engine, elementSelector, {"class": "Class", property: "property"}), element, rootElement);
		}, [], MockupDDToolbox.utils.addDataClass)
	], MockupDDToolbox.utils.addDataClass));
	toolbox.addToolboxItem(new MockupDDToolboxItem("What does this element do?", function(model, element, elementSelector) {}, [
		new MockupDDToolboxItem("saves the (object) ...", function(model, element, elementSelector) {
			mockupDDEditor.addTag(new SaveTag(engine, elementSelector, {"class": "Class", mode: 'creates'}), element, rootElement);
		}, [], MockupDDToolbox.utils.addActionClass),
		new MockupDDToolboxItem("deletes the (object) ...", function(model, element, elementSelector) {
			mockupDDEditor.addTag(new DeleteTag(engine, elementSelector, {"class": "Class"}), element, rootElement);
		}, [], function(element) { $(element).addClass("mockupdd-action-tag") }),
		new MockupDDToolboxItem("navigates to (page) ...", function(model, element, elementSelector) {
			mockupDDEditor.addTag(new LinkTag(engine, elementSelector, {page: "pageName"}), element, rootElement);
		}, [], MockupDDToolbox.utils.addActionClass)
	], MockupDDToolbox.utils.addActionClass));
}