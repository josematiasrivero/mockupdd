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

- Add an entry so that when clicking on the id "widget-id" on the sidebar, it creates a new widget of that kind.
Example:

  ```javascript
  $('#widget-id').on('click', function () {
      var widget = "html of the new widget";
      _addToPage(widget);
    });
  ```

### style.css

- Just in case the widget you're adding is inside a div container, you musk a special class to this css file.
Example:

  ```css
  img.mk-draggable {
      position: absolute;
      cursor: pointer;
      width: 352px;
      height: 240px;
  }
  .img.mk-draggable {
      left: 285px;
      top: 55px;
      position: absolute;
      cursor: pointer;
      width: 5px;
      height: 5px;
  }
  ```

### WidgetsModals.js
- Add a new entry in properties array
Example (for a label property):

  ```javascript
  "widget-nameModal": function (widget-name) {
    currentWidget = $(widget-name);
    var modalStructure = $.parseHTML(propertiesModalTemplate);
    $("body").append($(modalStructure));
    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
        "<label for=\"label\" class=\"control-label\">Label:</label>" +
        "<input type=\"text\" name=\"label\" id=\"label\" value=\"" + $(label).text() +
        '"class="form-control mk-modal-input">' +
        "</div>"));
    $("#modal-apply").click(function () {
      currentWidget.text($("#dialog-form").find("input[name='label']").val());
    });
    setDialogProperties();
  }
  ```

### EvantAttacher.js

- If the widget is not contained into a div, don't do anything here.

- In case it is, you must match the name of the tag, and look for the div parent. It is easy to do, just add the tag name of the widget:
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
