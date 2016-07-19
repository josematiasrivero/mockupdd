/*
 * Document: MockupAutosaveService.js
 * Description: a service used to save the mockup in a certain time lapse.
 */

/// Prerequisites: MockupRepository.js, GenericRepository.js, Preconditions.js, MockupStateController.js

var timeToReload = 5000; // in milliseconds.

function getHtmlToPersist() {
  var $page = $('#page').clone();
  $page.find('.ui-wrapper').each(function (i, e) {
    var $parent = $(e).parent();
    var $wrapper = $(e);
    $(e).children().each(function (i, e) {
      if (!$(e).is('div')) {
        $(e).css('width', $wrapper.css('width'));
        $(e).css('height', $wrapper.css('height'));
        $parent.append($(e).clone());
      }
    });
    $(e).remove();
  });
  $page.find('.ui-resizable').each(function (i, e) {
    $(e).find('*').each(function (i, e) {
      $(e).remove();
    });
  });
  $page.find('*').each(function (i, e) {
    $(e).attr('class', function (i, c) {
      return c.replace(/(^|\s)ui-\S+/g, '');
    });
  });
  return $page;
}

var MockupAutosaveService = function () {
  if (MockupStateController.isState('LOADING')) {
    return;
  }
  var mockupRepository = new MockupRepository();
  var mockupId = $('#mockupId').val();
  var mockupName = $('#mockupName').val();
  var interval = setInterval(function () {
    MockupStateController.update('SAVING');
    mockupRepository.save(mockupId, mockupName, {
        html: getHtmlToPersist().html()
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
