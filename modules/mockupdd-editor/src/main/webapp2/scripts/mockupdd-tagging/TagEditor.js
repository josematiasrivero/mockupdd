var TagEditor = Class.extend({

	init: function(model, element, rootElement) {
		var self = this;
		this.model = model;
		this.element = element;
		this.editContent = this.buildEditContent(element);
		this.readContent = this.buildReadContent(element);
		this.developerContent = this.buildDeveloperContent(element);
		this.mode = TagEditor.END_USER_MODE;
		this.readContent.click(function() {
			self.setEditMode();
		});	
		this.editContentToolbar = this.buildEditContentToolbar();
		this.container = $('<div class="mockupdd-tag-widget">');
		this.container.append(this.readContent);
		this.container.append(this.editContent);
		this.container.css({left: $(element).position().left, top: $(element).position().top});
		this.container.append(this.editContentToolbar);
		this.container.append(this.developerContent);
		$(rootElement).append(this.container);
		this.setEditMode();
	},
	
	getModel: function() {
		return this.model;
	},
	
	getElement: function() {
		return this.element;
	},
	
	hideAll: function() {
		this.readContent.hide();
		this.editContent.hide();
		this.editContentToolbar.hide();
		this.developerContent.hide();
	},
	
	setEditMode: function() {
		this.hideAll();
		this.bindEditData();
		this.editContent.fadeIn(100);
		this.editContentToolbar.show();
		this.container.addClass("mockupdd-tag-widget-editing-mode");
		this.editContent.find('input:first').select();
	},
	
	setReadMode: function() {
		this.hideAll();
		this.bindReadData();
		this.readContent.fadeIn(100);
		this.container.removeClass("mockupdd-tag-widget-editing-mode");
	},
	
	switchToDeveloperMode: function() {
		this.hideAll();
		this.developerContent.show(100);
		var parameterValues = "";
		for (parameter in this.model.getParameters()) {
			if (parameterValues.length > 0) {
				parameterValues = parameterValues + ", ";
			}
			parameterValues = parameterValues + parameter + ':"' + this.model.getParameters()[parameter] + '"';
		}
		var content = this.model.getTagType() + " {" + parameterValues + "}";
		this.developerContent.html(content);
	},
	
	getContainer: function() {
		return this.container;
	},
	
	getEditContent: function() {
		return this.editContent;
	},
	
	getReadContent: function() {
		return this.readContent;
	},
	
	buildEditContentToolbar: function() {
		var self = this;
		var toolbar = $('<div><button class="mockupdd-tag-ok-button btn">Ok</button><button class="mockupdd-tag-cancel-button btn">Cancel</button><button class="mockupdd-tag-delete-button btn">Delete</button></div>');
		toolbar.hide();
		toolbar.find('.mockupdd-tag-ok-button').click(function(e) {
			if (self.saveDataToModel()) {
				self.setReadMode();
			}
			e.preventDefault();
		});
		toolbar.find('.mockupdd-tag-cancel-button').click(function(e) {
			self.setReadMode();
			e.preventDefault();
		});
		toolbar.find('.mockupdd-tag-delete-button').click(function(e) {
			self.container.remove();
			self.model.removeFromMockupDDModel();
		});
		return toolbar;
	},
	
	buildDeveloperContent: function() {
		return $('<div class="mockupdd-developer-content"></div>');
	},
	
	buildEditContent: function(element) {
		throw 'mustBeImplemented';
	},
	
	buildReadContent: function(element) {
		throw 'mustBeImplemented';
	},
	
	saveDataToModel: function(element) {
		throw 'mustBeImplemented';
	},
	
	bindReadData: function(element) {
		throw 'mustBeImplemented';
	},
	
	bindEditData: function(element) {
		throw 'mustBeImplemented';
	}
	
});
TagEditor.END_USER_MODE = 0;
TagEditor.DEVELOPER_MODE = 1;