var Annotation = Serializable.extend("Annotation", {
    __name: {type: TYPES.String, label: "Name", init: "New annotation"},
    __template: {
        type: TYPES.AnnotationTemplate, label: "Template", init: function () {
            return new AnnotationTemplate();
        }()
    }
    // Valores de los placeholders.
});