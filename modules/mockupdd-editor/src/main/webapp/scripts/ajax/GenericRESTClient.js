var GenericRESTClient = Class.extend({
  init : function() {
  },
  
  _jsonPut : function(url, data, okCallback, errorCallback){
	  $.ajax({
		  url: url,
		  data: JSON.stringify(data),
		  method: "PUT",
		  contentType: "application/json",
		  dataType: "json",
		  success: okCallback,
		  error: errorCallback,
	  })
  },
  
  _jsonPost : function(url, data, okCallback, errorCallback){
	  $.ajax({
		  url: url,
		  data: JSON.stringify(data),
		  method: "POST",
		  contentType: "application/json",
		  dataType: "json",
		  success: okCallback,
		  error: errorCallback,
	  })
  },
	  
  _jsonGet : function(url, data, okCallback, errorCallback){
	  $.ajax({
		  url: url,
		  method: "GET",
		  dataType: "json",
		  success: okCallback,
		  error: errorCallback,
	  })
  }
	  
});