Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

var MockupModelLocalStorageStore = Class.extend({
	
	saveModel: function(mockupId, model, callback) {
		localStorage.setObject(mockupId, model);
		callback();
	},
	
	getModel: function(mockupId, callback) {
		var model = localStorage.getObject(mockupId);
		if (model) {
			model = new Mockup(model._tags);
		}
		callback(model);
	}
	
});