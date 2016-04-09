var AnnotationTemplateRESTClient = new (Class.extend({
    init: function () {
        this._cachedResponse = null;
    },

    getAll: function () {
        if (!this._cachedResponse) {
            this._cachedResponse = JSON.parse($.ajax({
                url: "/service/annotationTemplates/",
                method: "GET",
                dataType: "json",
                async: false
            }).responseText);

            for (var i = 0; i < this._cachedResponse.length; i++) {
                this._cachedResponse[i] = (function (self) {
                    var res = new AnnotationTemplate();
                    res.setName(self._cachedResponse[i].name);
                    res.setContent(self._cachedResponse[i].content);
                    return res;
                })(this);
            }
        }
        return this._cachedResponse;
    }
}));