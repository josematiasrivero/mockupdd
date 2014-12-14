Tag = Class.extend({

	init: function(rootDom, model) {
		this._rootDom = rootDom;
		this._model = model;
		this._content = null;
		this.initializeUI();
	},
	
	initializeUI: function() {
		var highlight = $('<div class="item-highlight-with-label">');
		highlight.offset({
			left : this._model.x,
			top : this._model.y
		});
		highlight.height(this._model.height);
		highlight.width(this._model.width);
		highlight.append("<div>" + this._model.type + "</div>");
		highlight.appendTo(this._rootDom);
		this._content = highlight;
	}
	
});
