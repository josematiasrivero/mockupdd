/**
 * This class represents a generic form used to edit an object (model).
 */
var AnnotationForm = Form.extend({

    init: function (model, title) {
        var placeholders = this._getPlaceholders(model.getTemplate().getValue());
        this._editionHtml = this._getEditionHtml(model.getTemplate().getValue(), placeholders);
        this._super(model, title);
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

    getDom: function () {
        return "<div>" +
            "<h3>" + this.getModel().getName() + "</h3>" +
            "<hr>" +
            this._editionHtml +
            "</div>";
    },

    save: function () {
        console.log($("#nombre1").val());
        this._model.set();
    }
});