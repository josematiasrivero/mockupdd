var AnnotationTemplate = Serializable.extend("AnnotationTemplate", {
    __name: {type: TYPES.String, label: "Name", init: "New annotation template"},
    __content: {type: TYPES.String, label: "Content", init: "This is an {{ example }} of a {{ template }}."}
});