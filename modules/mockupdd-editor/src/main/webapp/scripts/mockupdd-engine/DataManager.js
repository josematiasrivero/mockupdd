var DataManager = Class.extend({

    init: function () {
        this.objectListeners = {};
    },

    save: function (klass, object, callback) {
        var self = this;
        this._saveObject(klass, object, function () {
            self._notifyListeners(klass);
            if (callback) {
                callback();
            }
        });
    },

    delete: function (klass, object, callback) {
        var self = this;
        this._deleteObject(klass, object, function () {
            self._notifyListeners(klass);
            if (callback) {
                callback();
            }
        });
    },

    addObjectListener: function (objectClass, callback) {
        if (!this.objectListeners[objectClass]) {
            this.objectListeners[objectClass] = [];
        }
        this.objectListeners[objectClass].push(callback);
    },

    _notifyListeners: function (objectClass) {
        if (this.objectListeners[objectClass]) {
            for (var i in this.objectListeners[objectClass]) {
                this.objectListeners[objectClass][i]();
            }
        }
    },

    getAll: function (klass, callback) {
        throw "mustBeImplemented";
    },

    _saveObject: function (klass, object, callback) {
        throw "mustBeImplemented";
    },

    _deleteObject: function (klass, object, callback) {
        throw "mustBeImplemented";
    }

});
