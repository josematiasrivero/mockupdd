/// Prerequisites: GenericRepository.js, Preconditions.js

var MockupRepository = function() {
  var instance = new GenericRepository();
  return _.extend(instance, {
    save: function(id, name, jsonData, okCallback, errorCallback) {
      try {
        Preconditions.checkType(id, 'string', 'id');
        Preconditions.checkType(name, 'string', 'name');
        Preconditions.checkType(jsonData, 'object', 'jsonData');
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
    },
    load: function(id, okCallback, errorCallback) {
      try {
        Preconditions.checkType(id, 'string', 'id');
      } catch (err) {
        throw 'Exception in MockupRepository: ' + err;
      }
      return this._jsonGet("/service/mockups/" + id, function(data) {
        return okCallback(data);
      }, errorCallback);
    }
  });
};
