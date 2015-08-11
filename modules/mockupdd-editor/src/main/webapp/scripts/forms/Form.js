var Form = class.extend{
	
	init: function(model, fieldFilterFunction){
		this._fieldFilterFunction = fieldFilterFunction || fuction(){return true}; 
		this._model = model;
		this._views = {};
		for(var prop in this._model.getMetadata()){
			var metadata = this._model.getMetadata()[prop];
			if(this._fieldFilterFuction(metadata) && metadata.editable){
				this._views[prop] = new metadata.type.getView(this._model.getProperty(prop));
			}
		}
	},

	/*
	 * Returns a map from label to view, with the views to be rendered by the form renderer.
	 */
	getViews: function(){
		var viewsMap = {}
		for(var prop in this._model.getMetadata()){
			viewsMap[this._model.getMetadata()[prop].label] = this._views[prop];
		}
	}

	save: function(){
		for(var prop in this._views){
			if(this._views[prop].isDirty()){
				this.model.setProperty(prop, this._views[prop].getValue());
			}
		}
	}
}