var AnnotationTemplate = Serializable.extend("AnnotationTemplate", {
    __id: {type: TYPES.Number,  init: null},
    __name: {type: TYPES.String, label: "Name", init: "New annotation template"},
    __content: {type: TYPES.String, label: "Content", init: "This is an {{ example }} of a {{ template }}."}
    
    init : function(id, name, content){
    	this._super();
    	this.setId(id);
    	this.setName(name);
    	this.setContent(content);
    }
});