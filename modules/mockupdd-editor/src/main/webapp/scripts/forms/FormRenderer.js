var FormRenderer = Class.extend({
	init: function(model){
		this._model=model;
		this._container = null;
		this._buttonsContainer = null;
		this._forms = [];	
		this._onClose = null;
		this._onDelete = null;
		this._toFocus = null;
	},

	setContainer: function(container){
		this._container = container;
	},
	
	setButtonsContainer: function(container){
		this._buttonsContainer = container;
	},
	

	_render : function(){
		var form = this._forms[this._forms.length-1];
		this._container.empty();
		this._container.append(form.getDom());
	},
	
	pushForm: function(form){
		var self = this;
		this._forms.push(form);
		this._render();
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