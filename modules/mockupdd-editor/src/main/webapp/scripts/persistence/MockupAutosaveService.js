/// Prerequisites: MockupRepository.js, GenericRepository.js, Preconditions.js

var timeToReload = 5000; // in milliseconds.
setTimeout(function() {
  var MockupAutosaveService = function() {
    var mockupRepository = new MockupRepository();
    var mockupId = $('#mockupId').val();
    var mockupName = $('#mockupName').val();
    var timeout = setInterval(function() {
      mockupRepository.save(mockupId, mockupName, {
          html: $('#page').html()
        },
        function() {
          console.log('Success saving mockup ' + mockupId);
        },
        function() {
          console.log('Error saving mockup ' + mockupId);
          alert('Couldn\'t save mockup ' + mockupId);
        });
    }, timeToReload);
  }();
}, 3000);
