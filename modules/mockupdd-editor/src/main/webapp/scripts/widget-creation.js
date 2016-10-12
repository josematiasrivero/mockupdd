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
    var title = $('<div class="title draggable mk-draggable"></div>');
    title.append('<h3 class="mk-draggable mk-resizable mk-contextual-menu">New title</h3>');
    _addToPage(title);
    title.find("h3").css("left", "0px").css("top", "0px");
  });

  $('#label').on('click', function () {
    var label = $('<div class="mk-label draggable mk-draggable"></div>');
    label.append('<label class="mk-draggable mk-resizable mk-contextual-menu">New label</label>');
    _addToPage(label);
    label.find("label").css("left", "0px").css("top", "0px");
  });

  $('#input').on('click', function () {
    var input = $('<div class="input draggable mk-draggable" contenteditable></div>');
    input.append('<input class="form-control mk-draggable mk-resizable mk-contextual-menu" placeholder="New input">');
    _addToPage(input);
    input.find(".ui-wrapper").css("height", "60px").css("width", "170px");
    input.find("input").css("height", "30px").css("width", "137px");
    input.append('<ul class="annotation-list empty"></ul>');
    input.find('ul').css('top', input.find('input').css('height'));
  });

  $('#button').on('click', function () {
    var button = $('<div class="button draggable mk-draggable" contenteditable></div>');
    button.append('<button class="mk-draggable mk-resizable mk-contextual-menu">New button</button>');
    _addToPage(button);
    button.append('<ul class="annotation-list empty"></ul>');
    button.find('ul').css('top', button.find('button').css('height'));
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

  $('#link').on('click', function () {
    var link = $('<div class="link draggable mk-draggable"></div>');
    link.append('<a class="mk-draggable mk-resizable mk-contextual-menu">New link</a>')
    _addToPage(link);
    link.find("link").css("left", "0px").css("top", "0px");
  });

  $('#checkbox').on('click', function () {
    var checkbox = $('<div class="checkbox draggable mk-draggable mk-resizable mk-contextual-menu"></div>');
    checkbox.append('<label><input type="checkbox" class="form-control" value="New checkbox">New checkbox</label>');
    _addToPage(checkbox);
    checkbox.find("input").css("width", "14px").css("height", "14px");
    checkbox.css("width", "122px").css("height", "35px");
  });

  $('#radio').on('click', function () {
    var radio = $('<div class="radio draggable mk-draggable mk-resizable mk-contextual-menu"></div>');
    radio.append('<label><input type="radio" class="form-control" value="New radio">New radio</label>');
    _addToPage(radio);
    radio.find("input").css("width", "14px").css("height", "14px");
    radio.css("width", "122px").css("height", "35px");
  });

  $('#spinner').on('click', function () {
    var spinner = $('<div class="spinner draggable mk-draggable" contenteditable></div>');
    spinner.append('<input type="number" class="form-control mk-draggable mk-resizable mk-contextual-menu" placeholder="New input">');
    _addToPage(spinner);
    spinner.find(".ui-wrapper").css("height", "60px").css("width", "170px");
    spinner.find("input").css("height", "30px").css("width", "137px");
  });

  $('#tab').on('click', function () {
    var tab = $('<div class="tab draggable mk-draggable"></div>');
    tab.append('<ul class="nav nav-tabs draggable mk-draggable mk-resizable mk-contextual-menu"><li class="active"><a href="#">Tab1</a></li></ul>')
    _addToPage(tab);
    tab.find("tab").css("left", "0px").css("top", "0px");
  });

});
