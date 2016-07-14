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
          var $self = $(this); // Avoiding multiple computations of the same thing
          if (key === "delete") {
            $self.remove();
          } else if (key === "properties") {
            var tag = $self.prop("tagName").toLowerCase();
            if (tag === 'h3') tag = "title";
            if (tag === 'div') tag = "panel";
            Modal.properties[tag+"Modal"]($self);
          } else if (key == "annotations") {
            Modal.annotations($self);
          } else { // bottom or front
            var tag = $self.prop("tagName").toLowerCase();
            var $element, $parent;
            if (tag === "button" || tag === "textarea" || tag === "input") {
              $element = $self.closest("." +  tag);
            } else {
              $element = $self;
            }
            $parent = $element.parent();
            $element.detach();
            if (key === "bottom") {
              $parent.prepend($element);
            } else if (key === "front") {
              $parent.append($element);
            }
          }
        },
        items: {
            "front": {name: "Bring to front", icon: ""},
            "bottom": {name: "Send to bottom", icon: ""},
            "delete": {name: "Delete", icon: ""},
            "properties": {name: "Properties", icon: ""},
            "annotations": {name: "Annotations", icon: ""}
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
