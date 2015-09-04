var MockupRunner = Class.extend({
	
	init : function(){
		this._widgets = {};
		this._container = $("<div/>")
	},
	
	loadWidgets : function(widgets){
		this._widgets = {};
		for(var id in widgets){
			this._widgets[id] = widgets[id].clone();
			this._widgets[id].drawOn(this._container);
		}
	},
	
	getContainer : function(){
		return this._container;
	}
	
})
