var ModalFormRenderer = FormRenderer.extend({
	
	init: function(domElement,model,modalId){
		this._super(model);
		this._enabled = true;
		this._domElement = domElement;
		this._modal = $("#"+modalId);
		this.setContainer($(".modal-body",this._modal));
		this.setButtonsContainer($(".modal-footer",this._modal));
		this._modal.on('shown.bs.modal', $.proxy(function () {
			if(this._toFocus != null){
			  this._toFocus.focus()
			}
		}, this))
		this._domElement.on("dblclick",$.proxy(function(){
			if(!this._enabled)
				return;
			var form = new ReflectionForm(this._model);
			this._forms = [];
			this.pushForm(form);
			this._modal.modal("show");

		},this))
	},
	
	disable: function(){
		this._enabled = false;
	},
	
	enable: function(){
		this._enabled = true;
	},
	
	popForm: function(){
		this._super();
		if(this._forms.length == 0){
			this._modal.modal("hide");
		}
	}
	
})