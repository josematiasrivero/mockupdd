/*
 * Document: MockupLoaderService.js
 * Description: it is used to load the mockup from the db when the page is loaded.
 */

 /// Prerequisites: MockupStateController.js, MockupRepository.js, EventAttacher.js

var MockupLoaderService = function () {
  return {
    loadMockup: function () {
      MockupStateController.update('LOADING');
      var mockupRepository = new MockupRepository();
      var mockupId = $('#mockupId').val();
      mockupRepository.load(mockupId,
        function (json) {
          var jsonString = JSON.parse(json.jsonData);
          if (jsonString) {
            $("#page").append(jsonString.html);
            console.log('Success load mockup ' + mockupId);
            EventAttacher.execute();
            EventAttacher.execute(); // hack: the buttons show a weird bug if we call only once to execute.
          }
          MockupStateController.update('SAVED');
        },
        function () {
          MockupStateController.update('DIRTY');
          console.log('Error loading mockup ' + mockupId);
          alert('Couldn\'t load mockup ' + mockupId);
        });
    }
  };
}();

$(document).ready(MockupLoaderService.loadMockup);
