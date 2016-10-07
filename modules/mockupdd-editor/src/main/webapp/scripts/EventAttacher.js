/*
 * Document: EventAttacher.js
 * Description: Attach events to widgets in the mockup.
 */

var EventAttacher = function () {
  return {
    attachDraggableItems: function () {
      var page = $('#page');
      page.find('.mk-draggable').each(function (i, e) {
        var tagName = e.tagName.toLowerCase();
        /*
         * Widgets such as inputboxes, buttons, and textareas, need a more complicated
         * way of making them draggable, so that they can maintain they original behavior.
         */
        if (tagName === 'input' || tagName === 'button' || tagName == 'textarea' || tagName == 'img' || tagName == 'h3' || tagName == 'ul') {
          var $parent = $(e).parent();
          if ($parent.attr('type') === 'checkbox' ||
            $parent.attr('type') === 'radio') $parent = $parent.parent();
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
        $(e).resizable({
          resize: function( event, ui ) {
            $(e).parent().parent().find('ul').css('top', $(e).css('height'));
          }
        });
      });
    },
    attachContextualMenus: function () {
      $('.mk-contextual-menu').mousedown(function () {
        if (event.which == 3) {
          $(this).contextMenu();
        }
      });
      $.contextMenu({
        selector: '.mk-contextual-menu',
        trigger: 'none',
        callback: function (key, options) {
          var $self = $(this); // Avoiding multiple computations of the same thing
          if (key === 'delete') {
            $self.remove();
          } else if (key === "properties") {
            var tag = $self.prop("tagName").toLowerCase();
            if ($self.hasClass("checkbox")) tag = "checkbox";
            else if ($self.hasClass("radio")) tag = "radio";
            else if ($self.hasClass("spinner")) tag = "spinner";
            else if (tag === 'ul') tag = "tab";
            else if (tag === 'h3') tag = "title";
            else if (tag === 'div') tag = "panel";
            Modal.properties[tag + "Modal"]($self);
          } else if (key == "annotations") {
            Modal.annotations($self);
          } else { // bottom or front
            var tag = $self.prop('tagName').toLowerCase();
            var $element, $parent;
            /*
             * Some widgets, as the button, textarea, and input boxes, have a div
             * containing them, that div is what it has to move to bottom/front
             */
            if (tag === "button" || tag === "textarea" || tag === "input" || tag === "img") {
              if ($self.attr("type") === 'number') {
                $element = $self.closest("." + "spinner");
              } else {
                $element = $self.closest("." + tag);
              }
            } else if (tag === 'h3') {
              $element = $self.closest(".title");
            } else {
              $element = $self;
            }
            $parent = $element.parent();
            $element.detach();
            if (key === 'bottom') {
              $parent.prepend($element);
            } else if (key === 'front') {
              $parent.append($element);
            }
          }
        },
        // Here goes all the options of the context menu
        items: {
          'front': {name: 'Bring to front', icon: ''},
          'bottom': {name: 'Send to bottom', icon: ''},
          'delete': {name: 'Delete', icon: ''},
          'properties': {name: 'Properties', icon: ''},
          'annotations': {name: 'Annotations', icon: ''}
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
