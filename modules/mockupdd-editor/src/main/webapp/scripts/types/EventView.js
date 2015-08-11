var EventView = TypeView.extend({
	init : function(value, id){
		this._super(value, id);
	},
	
	copyEditingValue: function(value){
		var copy = new Event();
		copy.setAction(value.getAction());
		return copy;
	},
	
	getView : function() {
		this._wrapper = $("<div class='text-right'>");
		this._select = $("<select class='form-control'><option value='none'>None</option></select>");
		this._button = $("<button class='btn btn-primary'>Edit</button>");
		this._select.change($.proxy(this.selectionUpdated, this))
		for(var actionType in Action.actionTypes){
			this._select.append("<option value='"+actionType+"'>"+actionType+"</option>");
		}
		if(this.value.getAction()==null){
			this._button.prop("disabled",true);
			this._select.val("none");
		} else{
			this._button.prop("disabled",false);
			this._select.val(this.value.getAction.getActionType());
		}
		this._wrapper.append(this._select);
		this._wrapper.append(this._button);
		return this._wrapper;
	},
	
	
	selectionUpdated: function(){
		var selectedAction = $("option:selected",this._select).val()
		;
		if(selectedAction=="none"){
			this._button.prop("disabled",true);
		} else{
			this._button.prop("disabled",false);
			if(this.value.getAction() == null || this.value.getAction().getActionType() != selectedAction){
				this.value.setAction(new Action.actionTypes[selectedAction]);
			}
		}

	}
})