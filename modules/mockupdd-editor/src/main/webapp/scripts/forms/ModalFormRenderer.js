var ModalFormRenderer = FormRenderer.extend({
	
	init: function(modalId){
		this._super();
		this._modalId = modalId;
		this._enabled = true;

	},
	
	disable: function(){
		this._enabled = false;
	},
	
	enable: function(){
		this._enabled = true;
	},
	
	popForm: function(){
		this._super();
		var modal = $("#"+this._modalId);
		if(this._forms.length == 0){
			modal.modal("hide");
		}
	},
	
	displayForm : function(form){
		var modal = $("#"+this._modalId);
		this.setContainer($(".modal-body",modal));
		this.setButtonsContainer($(".modal-footer",modal));
		if(!this._enabled){
			return;
		}
		this.pushForm(form);
		modal.modal("show");
	}
	
})