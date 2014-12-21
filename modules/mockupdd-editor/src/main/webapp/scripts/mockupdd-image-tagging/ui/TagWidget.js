TagWidget = Widget.extend({

	init: function(rootDom, model) {
		this._super();
		this._rootDom = rootDom;
		this._model = model;
		this._content = null;
		this.registerEvent("delete");
		this._initializeUI();
	},
	
	_initializeUI: function() {
		var self = this;
		var highlight = $('<div class="item-highlight-with-label">');
		highlight.offset({
			left : this._model.x,
			top : this._model.y
		});
		highlight.height(this._model.height);
		highlight.width(this._model.width);
		highlight.append("<div>" + this._model.type + "</div>");
		highlight.append('<div class="tag-close-button">X</div>');
		highlight.appendTo(this._rootDom);
		highlight.find(".tag-close-button").on("click", function() {
			self._content.remove();
			self.notify("delete", self._model);
		});
		this._content = highlight;
	}
	
});
