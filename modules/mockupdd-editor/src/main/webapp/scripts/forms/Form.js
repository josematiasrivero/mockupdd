var Form = Class.extend({
	
	init: function(model, title, fieldFilterFunction){
		this._fieldFilterFunction = fieldFilterFunction || function(){return true}; 
		this._model = model;
		this._views = {};
		this._title = title;
		this._buttons = {
				"Cancel" : {
					action: function(form){
						},
					style: "default"
				},
				"Save" : {
					action: function(form){
							form.save();
						},
					style: "primary"
				}

		}
		for(var prop in this._model.getMetadata()){
			var metadata = this._model.getMetadata()[prop];
			if(this._fieldFilterFunction(metadata) && metadata.editable){
				this._views[prop] = {
						view: metadata.type.getTypeView(this._model.getProperty(prop)),
						category: metadata.category
				};
			}
		}
	},
	
	getButtons: function(){
		return this._buttons;
	},
	
	/*
	 * Changes the buttons to be displayed in the form.
	 * 
	 * @params buttons: 
	 * An dict describing the buttons to render. Keys will be used as
	 * buttons text. Each value will be a dict with the following options:
	 *  * action: a function to be called in button press with the form as parameter
	 *  * style: bootstrap button style
	 *   
	 * Usage:
	 * 
	 * ```
	 *   aForm.setButtons({
	 *     "Save" : {
	 *       style: "primary",
	 *       action: function(form){...}
	 *     },
	 *     "Delete" : {
	 *     	 style: "danger",
	 *       action: function(form){...}
	 *     }
	 *   });
	 * ```
	 */
	setButtons: function(buttons){
		this._buttons = buttons;
	},

	/*
	 * Returns a map from label an object holding the view and the category.
	 */
	getViews: function(){
		var viewsMap = {}
		for(var prop in this._views){
			viewsMap[this._model.getMetadata()[prop].label] = this._views[prop];
		}
		return viewsMap;
	},
	
	getButtonDom: function(label){
		var style = this._buttons[label].style;
		var button = $("<button class='btn btn-"+style+"'>"+label+"</button>")
		var self = this;
		button.click(function(){
			self._buttons[label].action(self);
		})
		return button;
	},
	
	save: function(){
		for(var prop in this._views){
			if(this._views[prop].view.isDirty()){
				this._model.setProperty(prop, this._views[prop].view.getValue());
			}
		}
	}
})