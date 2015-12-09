/**
 * This class represents a generic form used to edit an object (model).
 */
var AnnotationForm = Form.extend({

    init: function (model, title) {
        this._super(model, title);
        this._annotationTemplates = this._getAnnotationTemplates();
        this._freeEditor = $("<textarea class='annotation-editor' />");
        this._freeEditor.val(model.getText());
        this._wrapper = $("<div>")
        this._wrapper.append(this._createSelectionOfTemplates())
        this._wrapper.append("<hr>");
        this._editionHtmlWrapper = $("<div>");
        this.changeTemplate(null)
        this._wrapper.append(this._editionHtmlWrapper);
    },

    changeTemplate: function (template) {
        this._currentTemplate = template;
        this._setEditionHtml();
        this._editionHtmlWrapper.html(this._editionHtml);
    },

    _setEditionHtml: function () {
    	if(this._currentTemplate != null){
	        var placeholders = this._getPlaceholders(this._currentTemplate.getContent());
	        this._editionHtml = this._getEditionHtml(this._currentTemplate.getContent(), placeholders);
    	} else {
    		this._editionHtml = this._freeEditor;
    	}    
    },

    /**
     * @return Placeholders[] an array of placeholders of structure: {start, end, name}.
     */
    _getPlaceholders: function (template) {
        var placeholders = [];
        for (var i = 1; i < template.length; i++) {
            if (template[i - 1] == '{' && template[i] == '{') {
                var name = '',
                    start = i;
                i++;
                while (i < template.length && !(template[i - 1] == '}' && template[i] == '}')) {
                    name += template[i++];
                }
                if (template[i - 1] == '}' && template[i] == '}') {
                    name = this._trim(name.substring(0, name.length - 1));
                    placeholders.push({start: start - 1, end: i + 1, name: name})
                }
            }
        }
        return placeholders;
    },

    _getEditionHtml: function (text, placeholders) {
        var html = "<p>",
            prev = 0;
        for (var i = 0; i < placeholders.length; i++) {
            html += text.substring(prev, placeholders[i].start);
            html += "<input type='text' id='PH-" + i + "' placeholder='" + placeholders[i].name + "'>";
            prev = placeholders[i].end;
        }
        html += text.substring(prev);
        return html + "</p>";
    },

    _trim: function (str) {
        return str;
    },

    _getAnnotationTemplates: function () {
        return AnnotationTemplateRESTClient.getAll();
    },

    _createSelectionOfTemplates: function () {
        var self = this;
        this._templateSelect = $("<select class='form-control'>");
        this._templateSelect.append($("<option selected value='null'> -- No template -- </option>"));
        this._getAnnotationTemplates().forEach(function (at, i) {
            self._templateSelect.append($("<option value='" + i + "'>" + at.getName() + "</option>"));
        });

        this._templateSelect.change(function () {
            var resp = $("option:selected", self._templateSelect).first().val();
            if (resp !== "null"){
            	self.changeTemplate(self._getAnnotationTemplates()[resp]);
            } else {
            	self.changeTemplate(null);
            };
        });
        return this._templateSelect;
    },

    getDom: function () {
        return this._wrapper;
    },

    save: function () {
    	if(this._currentTemplate != null){
	        var placeholders = this._getPlaceholders(this._currentTemplate.getContent());
	        var text = "",
	            prev = 0;
	        for (var i = 0; i < placeholders.length; i++) {
	            text += this._currentTemplate.getContent().substring(prev, placeholders[i].start);
	            text += $("#PH-" + i).val();
	            prev = placeholders[i].end;
	        }
	        text += this._currentTemplate.getContent().substring(prev);
	        this._model.setText(text);
        } else {
        	this._model.setText(this._freeEditor.val());
        }
    }
});