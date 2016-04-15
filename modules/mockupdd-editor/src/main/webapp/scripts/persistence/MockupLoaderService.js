$(document).ready (function() {
  var mockupRepository = new MockupRepository();
  var mockupId = $('#mockupId').val();
  mockupRepository.load(mockupId,
    function(json) {
      jsonString = JSON.parse(json.jsonData);
      $("#page").append(jsonString.html);
      console.log('Success load mockup ' + mockupId);
    },
    function() {
      console.log('Error loading mockup ' + mockupId);
      alert('Couldn\'t load mockup ' + mockupId);
    });
});
