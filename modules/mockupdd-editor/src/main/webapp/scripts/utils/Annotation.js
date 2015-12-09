var Annotation = Serializable.extend("Annotation", {
    __name: {type: TYPES.String, label: "Name", init: "New annotation"},
    __text: {type: TYPES.String, label: "Text", init: ""}
});