var MockupRESTClient = new (GenericRESTClient.extend({
  init : function() {
  },

  getMockup : function(id, okCallback, errorCallback) {
    return this._jsonGet("/service/mockups/" + id, function(data) {
      alert(data.jsonData);
      data = JSON.parse(data.jsonData);
      alert(data);
      return okCallback(data);
    }, errorCallback);
  },

  updateMockup : function(id, name, jsonData, okCallback, errorCallback) {
    var jsonString = JSON.stringify(jsonData);
    var mockup = {
      id : id,
      name : name,
      jsonData : jsonString
    };
    return this._jsonPut("/service/mockups/" + id, mockup, okCallback, errorCallback);
  }
}))();