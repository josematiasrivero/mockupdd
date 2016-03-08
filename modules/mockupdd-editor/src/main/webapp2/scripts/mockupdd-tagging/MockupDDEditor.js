var MockupDDEditor = Class.extend({

	init: function(model) {
		this.model = model;
		this.tagEditors = [];
		this.editorFunctions = this.createEditorFunctionsByTagType();
	},
	
	createEditorFunctionsByTagType: function() {
		return {
			"Data::Data": function(tag, element, rootElement) {
				if (tag.getParameters().isList) {
					return new DataListTagEditor(tag, element, rootElement);
				} else if (tag.getParameters().property) {
					return new DataPropertyTagEditor(tag, element, rootElement);
				} else {
					return new DataItemTagEditor(tag, element, rootElement);
				}
			},
			"Action::Save": function(tag, element, rootElement) {
				return new SaveTagEditor(tag, element, rootElement);
			},
			"Action::Delete": function(tag, element, rootElement) {
				return new DeleteTagEditor(tag, element, rootElement);
			},
			"Action::Link": function(tag, element, rootElement) {
				return new LinkTagEditor(tag, element, rootElement);
			}
			
		}
	},
	
	addTag: function(tag, element, rootElement) {
		this.model.addTag(tag);
		var tagEditor = this.editorFunctions[tag.getTagType()](tag, element, rootElement);
		this.addTagEditor(tagEditor);
		return tagEditor;
	},
	
	addTagEditor: function(tagEditor) {
		this.tagEditors.push(tagEditor);
	},
	
	getTagEditors: function() {
		return this.tagEditors.concat();
	},
	
	switchToDeveloperMode: function() {
		_.each(this.getTagEditors(), function(tagEditor) {
			tagEditor.switchToDeveloperMode();
		});
	}
	
});