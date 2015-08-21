var EventView = TypeView.extend({
	init : function(value){
		this._super(value);
	},
	
	copyEditingValue: function(value){
		var copy = new Event();
		if(value != null)
			copy.setAction(value.getAction());
		return copy;
	},
	
	getDom : function() {
		this._wrapper = $("<div class='input-group'>");
		this._select = $("<select class='form-control'><option value='none'>None</option></select>");
		var btnWrapper = $("<span class='input-group-btn'/>");
		this._button = $("<button class='btn btn-primary'>Edit</button></span>");
		btnWrapper.append(this._button);
		this._select.change($.proxy(this.selectionUpdated, this))
		for(var actionType in Action.actionTypes){
			this._select.append("<option value='"+actionType+"'>"+actionType+"</option>");
		}
		if(this._value.getAction()==null){
			this._button.prop("disabled",true);
			this._select.val("none");
		} else{
			this._button.prop("disabled",false);
			this._select.val(this._value.getAction().getActionType());
		}
		this._wrapper.append(this._select);
		var self = this;
		this._button.click(function(){
			self._renderer.pushForm(new Form(self._value.getAction(), "Click action"));
		})
		this._wrapper.append(btnWrapper);
		return this._wrapper;
	},
	
	
	selectionUpdated: function(){
		var selectedAction = $("option:selected",this._select).val();
		if(selectedAction=="none"){
			this._button.prop("disabled",true);
		} else{
			this._button.prop("disabled",false);
			if(this._value.getAction() == null || this._value.getAction().getActionType() != selectedAction){
				this._value.setAction(new Action.actionTypes[selectedAction]);
			}
		}

	}
})