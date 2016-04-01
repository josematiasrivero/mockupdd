$(window).on("load", function(){

  $("#title").on("click", function(){
    var title = $("<h3>New title</h3>")
    $(title).draggable();
    $(title).css({
      'left' : '285px',
      'top': '55px',
      'position' : 'absolute',
      'cursor' : 'pointer',
      'color' : 'gray',
    });
    $("#page").append(title);
  });

  $("#label").on("click", function(){
    var label = $("<label>New label</label>")
    $(label).draggable();
    $(label).css({
      'left' : '285px',
      'top': '55px',
      'position' : 'absolute',
      'cursor' : 'pointer',
      'color' : 'black',
      'width' : '100px',
      'height' : '50px',
      'font-size' : '14px',
    });
    $("#page").append(label);
  });

  $("#input").on("click", function(){
    var input = $("<div></div>")
    $(input).append("<input placeholder=\"New input\"></input>");
    $(input).draggable();
    $(input).css({
      'left' : '285px',
      'top': '55px',
      'position' : 'absolute',
      'cursor' : 'pointer',
      'width' : '150px',
      'height' : '30px',
    });
    $("#page").append(input);
  });

  $("#button").on("click", function(){
    var button = $("<button>New button</button>");
    $(button).attr("class","btn btn-primary");
    $(button).draggable({
        cancel: false,
    });
    $(button).css({
      'left' : '285px',
      'top': '55px',
      'position' : 'absolute',
    });
    $("#page").append(button);
  });

  $("#panel").on("click", function(){
    var header = $("<div class='panel-heading'>Header text</div>");
    var body = $("<div class='panel-body'>Paragraph text</div>");
    body.css("font-size", "14px");

    var panel = $("<div></div>");
    $(panel).draggable();
    $(panel).addClass("panel panel-info");
    $(panel).css({
      'left' : '285px',
      'top': '55px',
      'position' : 'absolute',
      'cursor' : 'pointer',
      'width' : '300px',
      'height' : '200px',
    });
    $(panel).append(header);
    $(panel).append(body);
    $("#page").append(panel);
  });

  $("#textarea").on("click", function(){
    var textarea = $("<textarea class='form-control'></textarea>")
    $(textarea).attr('placeholder', "This is a Text Area");
    $(textarea).draggable({
        cancel: false,
    });
    $(textarea).css({
      'left' : '285px',
      'top': '55px',
      'position' : 'absolute',
      'cursor' : 'pointer',
      'width' : '300px',
      'height' : '70px',
    });
    $("#page").append(textarea);
  });

});
