/**
 * Attach events to elements in the mockup.
 */
var EventAttacher = function () {
  return {
    attachDraggableItems: function () {
      var page = $('#page');
      page.find('.mk-draggable').each(function (i, e) {
        var tagName = e.tagName.toLowerCase();
        if (tagName === 'input') {
          var $parent = $(e).parent();
          $parent.draggable({
            start: function (event, ui) {
              $(this).data('preventBehaviour', true);
            }
          });
          $parent.find(':input').on('mousedown', function (e) {
            var mouseDown = new MouseEvent('mousedown', {
              screenX: e.screenX,
              screenY: e.screenY,
              clientX: e.clientX,
              clientY: e.clientY,
              view: window
            });
            $(this).closest('.draggable')[0].dispatchEvent(mouseDown);
          }).on('click', function (e) {
            var $draggable = $(this).closest('.draggable');
            if ($draggable.data('preventBehaviour')) {
              e.preventDefault();
              $draggable.data('preventBehaviour', false)
            }
          });
        } else if (tagName === 'textarea' || tagName === 'button') {
          $(e).draggable({cancel: false});
        } else {
          $(e).draggable();
        }
      });
    },
    execute: function () {
      this.attachDraggableItems();
    }
  }
}();