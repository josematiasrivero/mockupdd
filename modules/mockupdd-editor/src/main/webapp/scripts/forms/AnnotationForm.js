/**
 * This class represents a generic form used to edit an object (model).
 */
var AnnotationForm = Form.extend({

    init: function (model, title) {
        this._super(model, title);
        this._annotationTemplates = this._getAnnotationTemplates();
        this._setEditionHtml();
    },

    changeTemplate: function (template) {
        this._model.setTemplate(template);
        this._setEditionHtml();
        $("#annotation-template-edition").html(this._editionHtml);
    },

    _setEditionHtml: function () {
        var placeholders = this._getPlaceholders(this._model.getTemplate().getContent());
        this._editionHtml = this._getEditionHtml(this._model.getTemplate().getContent(), placeholders);
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
        if (this._getAnnotationTemplates() == [])
            return "<h5 style='color: red'>ERROR: There are not any annotation templates. Please upload some.</h5>";
        var select = "<select id='annotation-template' class='form-control'>";
        select += "<option selected value='null'> -- Annotation Template -- </option>";
        this._getAnnotationTemplates().forEach(function (at, i) {
            select += "<option value='" + i + "'>" + at.getName() + "</option>";
        });
        var response = $(select + "</select>");
        var self = this;
        response.change(function () {
            var resp = $("#annotation-template option:selected").first().val();
            if (resp !== "null") self.changeTemplate(self._getAnnotationTemplates()[resp]);
        });
        return response;
    },

    getDom: function () {
        return $("<div>").append("<h3>" + this.getModel().getName() + "</h3>")
            .append("<hr>")
            .append(this._createSelectionOfTemplates())
            .append("<hr>")
            .append("<div id='annotation-template-edition'>");
    },

    save: function () {
        console.log($("#nombre1").val());
        this._model.set();
    }
});