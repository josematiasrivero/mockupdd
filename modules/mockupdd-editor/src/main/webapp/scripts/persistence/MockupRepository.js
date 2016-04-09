/// Prerequisites: GenericRepository.js, Preconditions.js

var MockupRepository = function() {
  var instance = new GenericRepository();
  return _.extend(instance, {
    save: function(id, name, jsonData, okCallback, errorCallback) {
      try {
        Preconditions.check(id, 'string', 'id');
        Preconditions.check(name, 'string', 'name');
        Preconditions.check(jsonData, 'object', 'jsonData');
      } catch (err) {
        throw 'Exception in MockupRepository: ' + err;
      }

      var jsonString = JSON.stringify(jsonData);
      var mockup = {
        id: id,
        name: name,
        jsonData: jsonString
      };
      return this._jsonPut("/service/mockups/" + id, mockup, okCallback, errorCallback);
    }
  });
};
