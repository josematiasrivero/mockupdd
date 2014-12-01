Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

var MockupDDModelStore = Class.extend({
	
	saveModel: function(url, modelString) {
		
		localStorage[url] = modelString;
	},
	
	getModel: function(url) {
		return localStorage[url];
	}
	
});