function createWidget(dom) {
  $(dom).dblclick(function() {
    var annotation = prompt("Annotation")
    var parts = annotation.split("::");
    var tag = parts[0].toLowerCase();
    $(dom).attr("data-mockupdd-" + tag, parts[1]);
  })
  redrawAnnotations(dom);
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

  function _addToPage(element) {
    $('#page').append(element);
    EventAttacher.execute();
  }

  $('#title').on('click', function () {
    var title = $('<h3 class="mk-draggable" contenteditable>New title</h3>');
    createWidget(title);
    _addToPage(title);
  });

  $('#label').on('click', function () {
    var label = $('<label class="mk-draggable" contenteditable>New label</label>');
    _addToPage(label);
  });

  $('#input').on('click', function () {
    var input = $('<div class="draggable mk-draggable" contenteditable></div>');
    $(input).append('<input class="form-control mk-draggable" placeholder="New input">');
    _addToPage(input);
  });

  $('#button').on('click', function () {
    var button = $('<button class="btn btn-primary mk-draggable" contenteditable>New button</button>');
    _addToPage(button);
  });

  $('#panel').on('click', function () {
    var header = $('<div class="panel-heading"><div contenteditable>Header text</div></div>');
    var body = $('<div class="panel-body" contenteditable>Paragraph text</div>');
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

