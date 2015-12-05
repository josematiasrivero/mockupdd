/**
 * This class represents a generic form used to edit an object (model).
 */
var AnnotationForm2 = Form.extend({
	
	init: function(model, title){
		this._super(model, title)
	},
	
	getDom : function(){
		return "<div>IMPLEMENT ME</div>"
	},
	
	save : function(){
		//IMPLEMENT ME
	}
})