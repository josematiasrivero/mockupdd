/*
 * Document: widget-creation.js
 * Description: when the page is loaded, add all the events to create widgets.
 */

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
    title.append('<div class="mk-resizable" style="width: 200px; height: 22px;"><h3 class="mk-draggable mk-contextual-menu">New title</h3></div>');
    _addToPage(title);
    title.find("h3").css("left", "0px").css("top", "0px");
    title.append('<ul class="annotation-list empty"></ul>');
    title.find('ul').css('top', title.find('h3').css('height'));
  });

  $('#label').on('click', function () {
    var label = $('<div class="mk-label draggable mk-draggable"></div>');
    label.append('<div class="mk-resizable" style="width: 200px; height: 22px;"><label class="mk-draggable mk-contextual-menu">New label</label></div>');
    _addToPage(label);
    label.find("label").css("left", "0px").css("top", "0px");
    label.append('<ul class="annotation-list empty"></ul>');
    label.find('ul').css('top', label.find('label').css('height'));
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
    var container = $('<div class="mk-panel draggable mk-draggable"></div>')
    var header = $('<div class="panel-heading"><div contenteditable>Header text</div></div>');
    var body = $('<div class="panel-body" contenteditable>Paragraph text</div>');
    body.css('font-size', '14px');
    var panel = $('<div class="panel panel-info mk-draggable mk-contextual-menu"></div>');
    $(panel).append(header);
    $(panel).append(body);
    $(container).append(panel);
    _addToPage(container);
    container.append('<ul class="annotation-list empty"></ul>');
    container.find('ul').css('top', container.find('.panel').css('height'));
  });

  $('#textarea').on('click', function () {
    var textarea = $('<div class="textarea draggable mk-draggable" placeholder="This is a Text Area"></div>');
    textarea.append('<textarea class="form-control mk-draggable mk-resizable mk-contextual-menu" placeholder="This is a Text Area"></textarea>');
    _addToPage(textarea);
    textarea.append('<ul class="annotation-list empty"></ul>');
    textarea.find('ul').css('top', textarea.find('textarea').css('height'));
  });

  $('#image').on('click', function () {
    var image = $('<div class="img draggable mk-draggable" placeholder="This is an Image"></div>');
    image.append('<img class="mk-draggable mk-resizable mk-contextual-menu" src="' + $('#create-image').find('img').attr('src') + '"/>');
    _addToPage(image);
    image.append('<ul class="annotation-list empty"></ul>');
    image.find('ul').css('top', image.find('.ui-wrapper').css('height'));
  });

  $('#link').on('click', function () {
    var link = $('<div class="link draggable mk-draggable mk-resizable mk-contextual-menu"></div>');
    link.append('<a>New link</a>');
    _addToPage(link);
    link.append('<ul class="annotation-list empty"></ul>');
    link.find('ul').css('top', link.css('height'));
  });

  $('#checkbox').on('click', function () {
    var checkbox = $('<div class="checkbox draggable mk-draggable mk-resizable mk-contextual-menu"></div>');
    checkbox.append('<label><input type="checkbox" class="form-control" value="New checkbox">New checkbox</label>');
    _addToPage(checkbox);
    checkbox.find('input').css('width', '14px').css('height', '14px');
    checkbox.css('width', '122px').css('height', '35px');
    checkbox.append('<ul class="annotation-list empty"></ul>');
    checkbox.find('ul').css('top', checkbox.css('height'));
  });

  $('#radio').on('click', function () {
    var radio = $('<div class="radio draggable mk-draggable mk-resizable mk-contextual-menu"></div>');
    radio.append('<label><input type="radio" class="form-control" value="New radio">New radio</label>');
    _addToPage(radio);
    radio.find('input').css('width', '14px').css('height', '14px');
    radio.css('width', '122px').css('height', '35px');
    radio.append('<ul class="annotation-list empty"></ul>');
    radio.find('ul').css('top', radio.css('height'));
  });

  $('#spinner').on('click', function () {
    var spinner = $('<div class="spinner draggable mk-draggable" contenteditable></div>');
    spinner.append('<input type="number" class="spinner-input form-control mk-draggable mk-resizable mk-contextual-menu" placeholder="New input">');
    _addToPage(spinner);
    spinner.find('.ui-wrapper').css('height', '60px').css('width', '170px');
    spinner.find('input').css('height', '30px').css('width', '137px');
    spinner.append('<ul class="annotation-list empty"></ul>');
    spinner.find('ul').css('top', spinner.find('input').css('height'));
  });

  $('#tab').on('click', function () {
    var tab = $('<div class="tab draggable mk-draggable"></div>');
    tab.append('<div class="mk-resizable" style="width: 200px; height: 55px;"><ul class="nav nav-tabs mk-draggable mk-contextual-menu"><li class="active"><a href="#">Tab1</a></li></ul></div>');
    _addToPage(tab);
    tab.find('tab').css('left', '0px').css('top', '0px');
    tab.append('<ul class="annotation-list empty"></ul>');
    tab.find('ul').css('top', tab.find('.nav-tabs').css('height'));
  });

});
