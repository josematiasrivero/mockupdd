/**
 * This class represents a generic form used to edit an object (model).
 */
var Form = Class.extend({
	
	/**
	 * Constructor.
	 * 
	 * @param model The object to be edited.
	 * @param title Form title. 
	 */
	init: function(model, title){
		this._model = model;
		this._title = title;
		this._onSave = [$.proxy(this.save,this)];
		this._onDelete = [];
		this._onCancel = [];
	},
	
	/**
	 * Return a dom tree with the UI to be presented to the user for model edition.
	 */
	getDom : function(){
		throw "Subclass should implement."
	},
	
	onSave : function(callback){
		this._onSave.push(callback);
	},
	
	onCancel : function(callback){
		this._onCancel.push(callback);
	},
	
	onDelete: function(callback){
		this._onDelete.push(callback);
	},
	
	getButtonsDom(){
		var wrapper = $("<div>");

		var cancelBtn = $("<button class='btn btn-default' >Cancel</div>");
		if(this._onCancel){
			cancelBtn.click(this._trigger(this._onCancel));
		}

		wrapper.append(cancelBtn);
		if(this.hasDelete()){
			var deleteBtn = $("<button class='btn btn-danger' >Delete</div>");
			wrapper.append(deleteBtn);
			deleteBtn.click(this._trigger(this._onDelete));
		}
		var saveBtn = $("<button class='btn btn-primary' >Save</div>");
		if(this._onSave){
			saveBtn.click(this._trigger(this._onSave));
		}
		wrapper.append(saveBtn);
		return wrapper;
	},
	
	/**
	 * Return a function that calls all the callback with the this object fixed.
	 */
	_trigger : function(callbacks){
		return $.proxy(function(){
			for(i in callbacks){
				callbacks[i](this);
			}
		}, this);
	},
	
	/**
	 * Saves the changes into the model.
	 * 
	 * @note This method should apply changes to the model using the setters.
	 */
	save: function(){
		throw "Subclass should implement."
	},
	
	/**
	 * Returns the form model
	 */
	getModel : function(){
		return this._model;
	},
	
	/**
	 * Set the renderer used to display this form.
	 */
	setRenderer(renderer){
		this._renderer = renderer;
	},
	
	/**
	 * Returns whether the form has a delete button or not.
	 */
	hasDelete : function(){
		return this._onDelete.length > 0;
	},
	
	/**
	 * Opens a sub form on top of the current one.
	 */
	openStackedForm(form){
		this._renderer.pushForm(form);
	}
})