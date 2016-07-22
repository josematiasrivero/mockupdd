/*
 * Document: widget-creation.js
 * Description: when the page is loaded, add all the events to create widgets.
 */

function createWidget(dom) {
  /*
  $(dom).dblclick(function() {
    var annotation = prompt("Annotation")
    var parts = annotation.split("::");
    var tag = parts[0].toLowerCase();
    $(dom).attr("data-mockupdd-" + tag, parts[1]);
  })
  redrawAnnotations(dom);
  */
}

function redrawAnnotations(widget) {

}

function drawAnnotation(widget, annotation) {
  var annotation = $('<div class="mockupdd-annotation">' + annotation + '</div>');
  annotation.attr("data-mockupdd-annotation-for", $(widget).attr("id"));
  annotation.css({
    "left": widget.offset().left + widget.width() - 10,
    "top": widget.offset().top + widget.height() - 10
  });
  $("#page").append(annotation);
}

$(window).on("load", function(){


  //Add a new widget to the main page.
  function _addToPage(element) {
    $('#page').append(element);
    EventAttacher.execute();
  }

  /*
   * All the functions behind add an OnClick event handler to the selection
   * widgets from the sidebar, so that when clicking on them, a new widget is
   * created and added to the main page.
   */

  $('#title').on('click', function () {
    var title = $('<h3 class="mk-draggable mk-resizable mk-contextual-menu" contenteditable>New title</h3>');
    createWidget(title);
    _addToPage(title);
  });

  $('#label').on('click', function () {
    var label = $('<label class="mk-draggable mk-resizable mk-contextual-menu" contenteditable>New label</label>');
    _addToPage(label);
  });

  $('#input').on('click', function () {
    var input = $('<div class="input draggable mk-draggable" contenteditable></div>');
    $(input).append('<input class="form-control mk-draggable mk-resizable mk-contextual-menu" placeholder="New input">');
    _addToPage(input);
  });

  $('#button').on('click', function () {
    var button = $('<div class="button draggable mk-draggable" contenteditable></div>');
    button.append('<button class="mk-draggable mk-resizable mk-contextual-menu">New button</button>');
    _addToPage(button);
  });

  $('#panel').on('click', function () {
    var header = $('<div class="panel-heading"><div contenteditable>Header text</div></div>');
    var body = $('<div class="panel-body" contenteditable>Paragraph text</div>');
    body.css('font-size', '14px');
    var panel = $('<div class="panel panel-info mk-draggable mk-resizable mk-contextual-menu"></div>');
    $(panel).append(header);
    $(panel).append(body);
    _addToPage(panel);
  });

  $('#textarea').on('click', function () {
    var textarea = $('<div class="textarea draggable mk-draggable" placeholder="This is a Text Area"></div>');
    textarea.append('<textarea class="form-control mk-draggable mk-resizable mk-contextual-menu" placeholder="This is a Text Area"></textarea>');
    _addToPage(textarea);
  });

  $('#image').on('click', function () {
    var image = $('<div class="img draggable mk-draggable" placeholder="This is an Image"></div>');
    image.append('<img class="mk-draggable mk-resizable mk-contextual-menu" src="' + $("#create-image").find('img').attr('src') + '"/>');
    _addToPage(image);
  });

});
