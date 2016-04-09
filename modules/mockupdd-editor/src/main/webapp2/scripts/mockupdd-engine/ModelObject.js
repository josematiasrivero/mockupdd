var ModelObject = Class.extend({

	init: function() {
		this.eventListeners = {};
	},

	registerEvent: function(eventName) {
		this.eventListeners[eventName] = [];
	},
	
	on: function(eventName, f) {
		if (!this.eventListeners[eventName]) {
			throw ("Event " + eventName + " does not exist");
		}
		this.eventListeners[eventName].push(f);
	},
	
	off: function(eventName, f) {
		if (!this.eventListeners[eventName]) {
			throw ("Event " + eventName + " does not exist");
		}
		var index = this.eventListeners.indexOf(f);
		if (index != -1) {
			this.eventListeners.splice(index, 1);
		}
	},
	
	notify: function(eventName, eventData) {
		for (i in this.eventListeners[eventName]) {
			this.eventListeners[eventName][i](eventData);
		}
	}

});