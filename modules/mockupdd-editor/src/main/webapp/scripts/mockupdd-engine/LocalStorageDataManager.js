Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}

var LocalStorageDataManager = DataManager.extend({

  init : function() {
    this._super();
  },

  getNextId : function(klass) {
    var klassIdKey = klass + "-id";
    if (localStorage[klassIdKey]) {
      var id = parseInt(localStorage[klassIdKey], 10) + 1;
      localStorage[klassIdKey] = id;
      return id;
    } else {
      localStorage[klassIdKey] = 0;
      return 0;
    }
  },

  _saveObject : function(klass, object, callback) {
    // console.log(klass, object);
    var objects = localStorage.getObject(klass);
    if (!objects) {
      objects = {};
    }
    if (!object._id) {
      object._id = this.getNextId(klass);
    }
    objects[object._id] = object;
    localStorage.setObject(klass, objects);
    if (callback) {
      callback();
    }
  },

  getAll : function(klass, callback) {
    var objects = localStorage.getObject(klass);
    if (!objects) {
      return {};
    }
    callback(objects);
  },

  _deleteObject : function(klass, object, callback) {
    // console.log(klass, object);
    if (!localStorage[klass]) {
      localStorage[klass] = []
    }
    var objects = localStorage.getObject(klass);
    delete (objects[object._id]);
    localStorage.setObject(klass, objects);
    if (callback) {
      callback();
    }
  },

  deleteAll : function(klass) {
    localStorage.setObject(klass, {});
  }

})