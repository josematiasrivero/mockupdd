var AnnotationListItemView = TypeView.extend({
	init : function(value, form){
		this._super(value, form);
	},
	
	copyEditingValue: function(value){
		return value.clone();
	},
	
	getDom : function() {
		this._wrapper = $("<a class='list-group-item'>"+this._value.getName()+"</a>");
		this._wrapper.dblclick($.proxy(function(){
			var form = new AnnotationForm(this._value,"");
			this._form.openStackedForm(form);
		}, this))
		return this._wrapper;
	},
	
	
})