var Widget = Class.extend({

    init: function () {
        this.eventListeners = {};
    },

    registerEvent: function (eventName) {
        this.eventListeners[eventName] = [];
    },

    on: function (eventName, f) {
        if (!this.eventListeners[eventName]) {
            throw ("Event " + eventName + " does not exist");
        }
        this.eventListeners[eventName].push(f);
        return this;
    },

    off: function (eventName, f) {
        if (!this.eventListeners[eventName]) {
            throw ("Event " + eventName + " does not exist");
        }
        var index = this.eventListeners.indexOf(f);
        if (index != -1) {
            this.eventListeners.splice(index, 1);
        }
        return this;
    },

    notify: function (eventName, eventData) {
        for (i in this.eventListeners[eventName]) {
            this.eventListeners[eventName][i](eventData);
        }
    },

    _randomId: function () {
        return "control_" + Math.floor((1 + Math.random()) * 0x100000000000).toString();
    },

    _get: function (object, getter) {
        if ($.isFunction(getter)) {
            return getter(object);
        } else {
            return object[getter];
        }
    },
    
    setDefaultProperties: function(options, defaultValues) {
    	for (key in defaultValues) {
    		if (options[key] == undefined) {
    			options[key] = defaultValues[key];
    		}
    	}
    	return options;
    }

});