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
	},
	
	/**
	 * Return a dom tree with the UI to be presented to the user for model edition.
	 */
	getDom : function(){
		throw "Subclass should implement."
	},
	
	/**
	 * Saves the changes into the model.
	 * 
	 * @note This method should apply changes to the model using the setters.
	 */
	save: function(){
		throw "Subclass should implement."
	}
})