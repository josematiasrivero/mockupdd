var AnnotationTemplate = Serializable.extend("AnnotationTemplate", {
    __name: {type: TYPES.String, label: "Name", init: "New annotation template"},
    __value: {type: TYPES.String, label: "Value", init: "This is an {{ example }} of a {{ template }}."}
});