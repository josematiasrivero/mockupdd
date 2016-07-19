/*
 * Document: GenericRepository.js
 * Description: implements the basic fuctions to comunicate via AJAX with the server.
 */

var GenericRepository = function () {
  return {
    _jsonPut: function (url, data, okCallback, errorCallback) {
      return $.ajax({
        url: url,
        data: JSON.stringify(data),
        method: "PUT",
        contentType: "application/json",
        dataType: "json",
        success: okCallback,
        error: errorCallback
      })
    },

    _jsonPost: function (url, data, okCallback, errorCallback) {
      return $.ajax({
        url: url,
        data: JSON.stringify(data),
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        success: okCallback,
        error: errorCallback
      })
    },

    _jsonGet: function (url, okCallback, errorCallback) {
      return $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: okCallback,
        error: errorCallback
      })
    }
  }
};
