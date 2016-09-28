/**
 * Handlers for the events of the annotations handler.
 * The button hides the annotation lists of the DOM.
 */
var AnnotationToggleHandler = (function () {
  var hideAnnotations = 'Hide annotations';
  $('#annotation-toggle').text(hideAnnotations);
  $('.annotation-list').show();
  return function () {
    $('.annotation-list').toggle();
    var $toggle = $('#annotation-toggle');
    if ($toggle.text() == hideAnnotations) {
      $toggle.text('Show annotations');
    } else {
      $toggle.text(hideAnnotations);
    }
  };
})();