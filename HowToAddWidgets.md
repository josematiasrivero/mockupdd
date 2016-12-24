## Adding a new widget to the project

### sidebar.jsp

- Add inside the widget list the new widget to be clicked.
Example:

  ```html
  <div class="col-md-12 mk-widget-list">
    <div class="row mk-sidebar-item">
      <div id="widget-id" class="col-md-6">
        <div class="text-center">
          <label class="control-label">Widget-name:</label>
        </div>
        <div id="create-label" class="text-center mk-widget-selector">
          This is a Widget-name</div>
      </div>
    </div>
  </div>
  ```

### widget-creation.js

- Add an entry so that when clicking on the id "widget-id" on the sidebar, it creates a new widget of that kind. Widgets must be within a div container, that wraps the widget, with some special classes to make it draggable.
Example:

  ```javascript
  $('#widget-id').on('click', function () {
    var widget = $('<div class="mk-widget draggable mk-draggable"></div>');
    widget.append('<div class="mk-resizable" style="width: 200px; height: 22px;"><widget class="mk-draggable mk-contextual-menu">New widget</widget></div>');
    _addToPage(widget);
    widget.find("widget-id").css("left", "0px").css("top", "0px");
    widget.append('<ul class="annotation-list empty"></ul>');
    widget.find('ul').css('top', widget.find('widget').css('height'));
  });
  ```

### style.css

- Just in case the widget you're adding is inside a div container, you musk a special class to this css file.
Example:

  ```css
  widget.mk-draggable {
      position: absolute;
      cursor: pointer;
      margin: 0px;
  }
  .widget.mk-draggable {
      left: 285px;
      top: 55px;
      position: absolute;
      cursor: pointer;
      width: 5px;
      height: 5px;
  }
  .mk-widget.mk-draggable {
      left: 285px;
      top: 55px;
      position: absolute;
      cursor: pointer;
      width: 5px;
      height: 5px;
      color: black;
      font-size: 16px;
  }
  ```

### WidgetsModals.js
- Add a new entry in properties array
Example (for a label property):

  ```javascript
  "widgetModal": function (widget) {
    currentWidget = $(widget);
    var modalStructure = $.parseHTML(propertiesModalTemplate);
    $("body").append($(modalStructure));
    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
        "<label for=\"widget\" class=\"control-label\">Label:</label>" +
        "<input type=\"text\" name=\"widget\" id=\"widget\" value=\"" + $(widget).text() +
        '"class="form-control mk-modal-input">' +
        "</div>"));
    $("#modal-apply").click(function () {
      currentWidget.text($("#dialog-form").find("input[name='widget']").val());
      $(".modal").remove();
    });
    setDialogProperties();
  },
  ```

### EvantAttacher.js

- The widget need to be identify in some way, so that it can look for the div parent. To perform this, just add the tag name of the widget (or class, or something that identify it):
  * (1) in 'attachDraggableItems' to look up the parent div
    this line ->
  ```javascript
  if (tagName === 'input' || tagName === 'button' || tagName == 'textarea' ...)
  ```
  * (2) in the callback of the contextMenu for front/bottom option
    this line ->
  ```javascript
  if (tag === "button" || tag === "textarea" || tag === "input" ...)
  ```

- Moreover, if the widget doesn't have a representative name, you must match the name, with the same you've used in the modal for properties, in attachContextualMenus, just as:
  ```javascript
  if ($self.hasClass('checkbox')) tag = 'checkbox';
  else if ($self.hasClass('radio')) tag = 'radio';
  else if ($self.hasClass('spinner')) tag = 'spinner';
  ```