/// Prerequisites: MockupRepository.js, GenericRepository.js, Preconditions.js, MockupStateController.js

var timeToReload = 5000; // in milliseconds.

var MockupAutosaveService = function () {
  if(MockupStateController.isState('LOADING')){
    return;
  }
  var mockupRepository = new MockupRepository();
  var mockupId = $('#mockupId').val();
  var mockupName = $('#mockupName').val();
  var interval = setInterval(function () {
    MockupStateController.update('SAVING');
    mockupRepository.save(mockupId, mockupName, {
        html: $('#page').html()
      },
      function () {
        MockupStateController.update('SAVED');
      },
      function () {
        console.log('Error saving mockup ' + mockupId);
        MockupStateController.update('DIRTY');
        alert('Couldn\'t save mockup ' + mockupId);
      });
  }, timeToReload);
};

setTimeout(function () {
  MockupAutosaveService();
}, 3000);
