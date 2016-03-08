var FormRenderer = Class.extend({
	init: function(){
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
		this._buttonsContainer.empty();
		this._buttonsContainer.append(form.getButtonsDom());
	},
	
	pushForm: function(form){
		var self = this;
		this._forms.push(form);
		form.onCancel($.proxy(this.popForm,this));
		form.onSave($.proxy(this.popForm,this));
		if(form.hasDelete()){
			form.onDelete($.proxy(this.popForm,this));
		}
		form.setRenderer(this);
		this._render();
	},
	
	popForm: function(){
		this._forms.pop();
		if(this._forms.length == 0){
		} else {
			this._render();
		}
	},
	

})