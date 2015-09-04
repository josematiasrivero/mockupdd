var ValidationView = TypeView.extend({
	init : function(value){
		this._super(value);
	},
	
	copyEditingValue : function(value){
		if(value == null)
			return null;
		return value.clone();
	},
	
	getDom : function() {
		this._wrapper = $("<div class='input-group'>");
		this._select = $("<select class='form-control'><option value='none'>None</option></select>");
		var btnWrapper = $("<span class='input-group-btn'/>");
		this._button = $("<button class='btn btn-primary'>Edit</button></span>");
		btnWrapper.append(this._button);
		this._select.change($.proxy(this.selectionUpdated, this))
		for(var validationType in Validation.validationTypes){
			this._select.append("<option value='"+validationType+"'>"+validationType+"</option>");
		}
		if(this._value==null){
			this._button.prop("disabled",true);
			this._select.val("none");
		} else{
			this._button.prop("disabled",false);
			this._select.val(this._value.getValidationType());
		}
		this._wrapper.append(this._select);
		var self = this;
		this._button.click(function(){
			self._renderer.pushForm(new Form(self._value, ""));
		})
		this._wrapper.append(btnWrapper);
		return this._wrapper;
	},
	
	selectionUpdated: function() {
		var selectedValidation = $("option:selected",this._select).val();
		if(selectedValidation=="none"){
			this._button.prop("disabled",true);
		} else{
			this._button.prop("disabled",false);
			if(this._value == null || this._value.getValidationType() != selectedValidation){
				this._value = new Validation.validationTypes[selectedValidation];
			}
		}
	}
})