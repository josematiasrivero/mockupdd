var AnnotationListItemView = TypeView.extend({
	init : function(value){
		this._super(value);
	},
	
	copyEditingValue: function(value){
		return value.clone();
	},
	
	getDom : function() {
		this._wrapper = $("<li class='list-group-item'>Test</li>");
		return this._wrapper;
	},
	
	
})