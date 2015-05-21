var MockupRESTClient = GenericRESTClient.extend({
  init : function() {
  },
  
  updateMockup : function(id, name, jsonData, okCallback, errorCallback){
	  var jsonString = JSON.stringify(jsonData);
	  var mockup = {
			  id: id,
			  name:name,
			  jsonData: jsonString
	  };
	  this._jsonPut("/service/mockups/"+id, mockup, okCallback, errorCallback);
  }
});