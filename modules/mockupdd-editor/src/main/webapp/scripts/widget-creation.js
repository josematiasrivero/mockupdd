$(window).on('load', function () {

  function _addToPage(element) {
    $('#page').append(element);
    EventAttacher.execute();
  }

  $('#title').on('click', function () {
    var title = $('<h3 class="mk-draggable">New title</h3>');
    _addToPage(title);
  });

  $('#label').on('click', function () {
    var label = $('<label class="mk-draggable">New label</label>');
    _addToPage(label);
  });

  $('#input').on('click', function () {
    var input = $('<div class="draggable mk-draggable"></div>');
    $(input).append('<input class="form-control mk-draggable" placeholder="New input">');
    _addToPage(input);
  });

  $('#button').on('click', function () {
    var button = $('<button class="btn btn-primary mk-draggable">New button</button>');
    _addToPage(button);
  });

  $('#panel').on('click', function () {
    var header = $('<div class="panel-heading">Header text</div>');
    var body = $('<div class="panel-body">Paragraph text</div>');
    body.css('font-size', '14px');
    var panel = $('<div class="panel panel-info mk-draggable"></div>');
    $(panel).append(header);
    $(panel).append(body);
    _addToPage(panel);
  });

  $('#textarea').on('click', function () {
    var textarea = $('<textarea class="form-control mk-draggable" placeholder="This is a Text Area"></textarea>');
    _addToPage(textarea);
  });

});
