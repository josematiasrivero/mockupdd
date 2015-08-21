var FormRenderer = Class.extend({
	init: function(model){
		this._model=model;
		this._container = null;
		this._buttonsContainer = null;
		this._forms = [];	
		this._onClose = null;
		this._onDelete = null;
	},

	setContainer: function(container){
		this._container = container;
	},
	
	setButtonsContainer: function(container){
		this._buttonsContainer = container;
	},
	
	render: function(){
		var currentForm = this._forms[this._forms.length-1];
		var views = currentForm.getViews();
		this._container.empty();
		for(var label in views){
			views[label].setRenderer(this);
			this._container.append(this._createField(label, views[label]));
		}
		this._buttonsContainer.empty();
		for(var label in currentForm.getButtons()){
			this._buttonsContainer.append(currentForm.getButtonDom(label));
		}
	},
	
	_createField: function(label, view){
		var formGroup = $("<div class='form-group'/>");
		var label=$("<label class='control-label col-xs-3'>"+label+"</label>");
		var control= $("<div class='col-xs-9'/>").append(view.getDom());
		formGroup.append(label);
		formGroup.append(control);
		return formGroup;
	},
	
	pushForm: function(form){
		var self = this;
		this._forms.push(form);
		var oldActions = {}
		for(var button in form.getButtons()){ 
			oldActions[button] = form.getButtons()[button].action;
			//TODO Refactor: this code below is a hack to fix the value button variable inside the new action.
			form.getButtons()[button].action = function(button){ return function(theForm){
					oldActions[button](theForm);
					self.popForm();
			}}(button);
		}
		this.render();
	},
	
	popForm: function(){
		this._forms.pop();
		if(this._forms.length == 0){
		} else {
			this.render();
		}
	},
	
	onClose : function(action){
		this._onClose = action;
	},
	
	triggerClose : function(){
		if(this._onClose != null)
			this._onClose(this);
	},
	
	
	onDelete : function(action){
		this._onDelete = action;
	},
	
	triggerDelete : function(){
		if(this._onDelete != null){
			this._onDelete(this);
		}
	},
	
	getModel: function(){
		return this._model;
	}
	
})