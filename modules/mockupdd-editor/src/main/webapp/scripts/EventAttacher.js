/**
 * Attach events to elements in the mockup.
 */
var EventAttacher = function () {
  return {
    attachDraggableItems: function () {
      var page = $('#page');
      page.find('.mk-draggable').each(function (i, e) {
        var tagName = e.tagName.toLowerCase();
        if (tagName === 'input' || tagName === 'button' || tagName == 'textarea') {
          var $parent = $(e).parent();
          $parent.draggable({
            start: function (event, ui) {
              $(this).data('preventBehaviour', true);
            }
          });
          $(this).on('mousedown', function (e) {
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
        } else {
          $(e).draggable();
        }
      });
    },
    attachResizableItems: function () {
      var page = $('#page');
      page.find('.mk-resizable').each(function (i, e) {
        $(e).resizable();
      });
    },
    attachContextualMenus: function () {
      $('.mk-contextual-menu').dblclick(function() {
        $(this).contextMenu();
      });
      $.contextMenu({
        selector: '.mk-contextual-menu',
        trigger: 'none',
        callback: function(key, options) {
          if (key === "delete") {
            $(this).remove();
          } else {
            var tag = $(this).prop("tagName").toLowerCase();
            var $element, $parent;
            if (tag === "button" || tag === "textarea" || tag === "input") {
              $element = $(this).closest("." +  tag);
            } else {
              $element = $(this);
            }
            $parent = $element.closest();
            $element.detach();
            if (key === "front") {
              $parent.prepend($element);
            } else if (key === "bottom") {
              $parent.append($element);
            }
          }
        },
        items: {
            "front": {name: "Bring to front", icon: ""},
            "bottom": {name: "Send to bottom", icon: ""},
            "delete": {name: "Delete", icon: ""}
        }
      });
    },
    execute: function () {
      this.attachDraggableItems();
      this.attachResizableItems();
      this.attachContextualMenus();
    }
  }
}();
