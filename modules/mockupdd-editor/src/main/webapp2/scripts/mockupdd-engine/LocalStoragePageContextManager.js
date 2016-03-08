Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

var LocalStoragePageContextManager = Class.extend({

	init: function() {},

	createPageContext: function(data, callback) {
		var id = new Date().getTime();
		var contexts = this._getContexts();
		contexts[id] = data;
		data.id = id;
		this._saveContexts(contexts);
		callback(data);
	},
	
	_getContextById: function(id) {
		return this._getContexts()[id];
	},
	
	_getContexts: function() {
		var contexts = localStorage.getObject("_mockupdd_LocalStoragePageContextManager_contexts");
		if (!contexts) {
			contexts = {};
			this._saveContexts(contexts);
		}
		return contexts;
	},
	
	_saveContexts: function(contexts) {
		return localStorage.setObject("_mockupdd_LocalStoragePageContextManager_contexts", contexts);
	},
	
	getPageContextForCurrentPage : function(callback) {
		var context = window.location.search.match(/mockupdd\-page\-context=[0-9]+/);
		if (!context) {
			callback(null);
		} else {
			var contextId = context[0].split('=')[1];
			callback(this._getContextById(contextId));
		}
	}

});