
var structure = "<div id=\"dialog-form\" title=\"Widget properties\">" +
                  "<form>" +
                    "<fieldset>" +
                    "</fieldset>" +
                    "<input id=\"modal-apply\" type=\"button\" value=\"Apply\" style=\"float: right;\"/>" +
                  "</form>" +
                "</div>";

var structure2 = "<div class=\"modal fade in\" id=\"dialog-form\" tabindex=\"-1\" role=\"dialog\" style=\"display: block;\">" +
                  "<div class=\"modal-dialog\">" +
                    "<div class=\"modal-content\">" +
                      "<div class=\"modal-header\">" +
                        "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
                        "<h4 class=\"modal-title\" id=\"exampleModalLabel\">Widgets properties</h4>" +
                      "</div>" +
                      "<div class=\"modal-body\">" +
                        "<form>" +
                          "<div class=\"form-group\">" +
                            "<label for=\"recipient-name\" class=\"control-label\">Recipient:</label>" +
                            "<input type=\"text\" class=\"form-control\" id=\"recipient-name\">" +
                          "</div>" +
                          "<div class=\"form-group\">" +
                            "<label for=\"message-text\" class=\"control-label\">Message:</label>" +
                            "<textarea class=\"form-control\" id=\"message-text\"></textarea>" +
                          "</div>" +
                        "</form>" +
                      "</div>" +
                      "<div class=\"modal-footer\">" +
                        "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>" +
                        "<button id=\"modal-apply\" type=\"button\" class=\"btn btn-primary\">Apply</button>" +
                      "</div>" +
                    "</div>" +
                  "</div>" +
                "</div>";

var currentWidget;

function setPropertiesDialog() {
  $("#dialog-form").dialog({
    autoOpen: true,
    height: 300,
    width: 350,
    modal: true,
    close: function() {
      $("#dialog-form").remove();
    },
    open: function(event, ui) {
      $(".ui-widget-overlay").bind("click", function(){
        $("#dialog-form").dialog("close");
      });
    }
  });
};

var Modal = {
  "titleModal": function (title) {
    currentWidget = $(title);
    var modalStructure = $.parseHTML(structure2);
    $("body").append($(modalStructure));

    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
          "<label for=\"color\" class=\"control-label\">Color:</label>" +
          "<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(title).css("color") + "\">" +
        "</div>"));

    /*
    $(fieldset).append("<label for=\"color\">Color</label>");
    $(fieldset).append("<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(title).css("color") + "\">");
    $(fieldset).append("<label for=\"font-size\">Font size</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-size\" id=\"font-size\" value=\"" + $(title).css("font-size") + "\">");
    $(fieldset).append("<label for=\"background-color\">Background color</label>");
    $(fieldset).append("<input type=\"text\" name=\"background-color\" id=\"background-color\" value=\"" + $(title).css("background-color") + "\">");
    $(fieldset).append("<label for=\"font-family\">Font family</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-family\" id=\"font-family\" value=\"" + /*$(label).css("font-family") +*/ /*"\">");
    */
    //setPropertiesDialog();
    $("#modal-apply").click(function(){
      currentWidget.css({
        "color" : $("#dialog-form").find("input[name='color']").val(),
        "font-size" : $("#dialog-form").find("input[name='font-size']").val(),
        "background-color" : $("#dialog-form").find("input[name='background-color']").val(),
        "font-family" : $("#dialog-form").find("input[name='font-family']").val(),
      })
    });
  },

  "labelModal": function (label) {
    currentWidget = $(label);
    var modalStructure = $.parseHTML(structure);
    $("#page").append($(modalStructure));
    var fieldset = $(modalStructure).find("fieldset");
    $(fieldset).append("<label for=\"color\">Color</label>");
    $(fieldset).append("<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(label).css("color") + "\">");
    $(fieldset).append("<label for=\"font-size\">Font size</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-size\" id=\"font-size\" value=\"" + $(label).css("font-size") + "\">");
    $(fieldset).append("<label for=\"background-color\">Background color</label>");
    $(fieldset).append("<input type=\"text\" name=\"background-color\" id=\"background-color\" value=\"" + $(label).css("background-color") + "\">");
    $(fieldset).append("<label for=\"font-family\">Font family</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-family\" id=\"font-family\" value=\"" + /*$(label).css("font-family") +*/ "\">");
    setPropertiesDialog();
    $("#modal-apply").click(function(){
      currentWidget.css({
        "color" : $("#dialog-form").find("input[name='color']").val(),
        "font-size" : $("#dialog-form").find("input[name='font-size']").val(),
        "background-color" : $("#dialog-form").find("input[name='background-color']").val(),
        "font-family" : $("#dialog-form").find("input[name='font-family']").val(),
      })
    });
  },
  "inputModal": function (input) {
    currentWidget = $(input);
    var modalStructure = $.parseHTML(structure);
    $("#page").append($(modalStructure));
    var fieldset = $(modalStructure).find("fieldset");
    $(fieldset).append("<label for=\"color\">Color</label>");
    $(fieldset).append("<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(input).css("color") + "\">");
    $(fieldset).append("<label for=\"font-size\">Font size</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-size\" id=\"font-size\" value=\"" + $(input).css("font-size") + "\">");
    $(fieldset).append("<label for=\"background-color\">Background color</label>");
    $(fieldset).append("<input type=\"text\" name=\"background-color\" id=\"background-color\" value=\"" + $(input).css("background-color") + "\">");
    $(fieldset).append("<label for=\"font-family\">Font family</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-family\" id=\"font-family\" value=\"" + /*$(label).css("font-family") +*/ "\">");
    setPropertiesDialog();
    $("#modal-apply").click(function(){
      currentWidget.css({
        "color" : $("#dialog-form").find("input[name='color']").val(),
        "font-size" : $("#dialog-form").find("input[name='font-size']").val(),
        "background-color" : $("#dialog-form").find("input[name='background-color']").val(),
        "font-family" : $("#dialog-form").find("input[name='font-family']").val(),
      })
    });
  },
  "buttonModal": function (button) {
    currentWidget = $(button);
    var modalStructure = $.parseHTML(structure);
    $("#page").append($(modalStructure));
    var fieldset = $(modalStructure).find("fieldset");
    $(fieldset).append("<label for=\"color\">Color</label>");
    $(fieldset).append("<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(button).css("color") + "\">");
    $(fieldset).append("<label for=\"font-size\">Font size</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-size\" id=\"font-size\" value=\"" + $(button).css("font-size") + "\">");
    $(fieldset).append("<label for=\"background-color\">Background color</label>");
    $(fieldset).append("<input type=\"text\" name=\"background-color\" id=\"background-color\" value=\"" + $(button).css("background-color") + "\">");
    $(fieldset).append("<label for=\"font-family\">Font family</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-family\" id=\"font-family\" value=\"" + /*$(label).css("font-family") +*/ "\">");
    setPropertiesDialog();
    $("#modal-apply").click(function(){
      currentWidget.css({
        "color" : $("#dialog-form").find("input[name='color']").val(),
        "font-size" : $("#dialog-form").find("input[name='font-size']").val(),
        "background-color" : $("#dialog-form").find("input[name='background-color']").val(),
        "font-family" : $("#dialog-form").find("input[name='font-family']").val(),
      })
    });
  },
  "panelModal": function (panel) {
    currentWidget = $(panel);
    var modalStructure = $.parseHTML(structure);
    $("#page").append($(modalStructure));
    var fieldset = $(modalStructure).find("fieldset");
    $(fieldset).append("<label for=\"color\">Color</label>");
    $(fieldset).append("<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(panel).css("color") + "\">");
    $(fieldset).append("<label for=\"font-size\">Font size</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-size\" id=\"font-size\" value=\"" + $(panel).css("font-size") + "\">");
    $(fieldset).append("<label for=\"background-color\">Background color</label>");
    $(fieldset).append("<input type=\"text\" name=\"background-color\" id=\"background-color\" value=\"" + $(panel).css("background-color") + "\">");
    $(fieldset).append("<label for=\"font-family\">Font family</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-family\" id=\"font-family\" value=\"" + /*$(label).css("font-family") +*/ "\">");
    setPropertiesDialog();
    $("#modal-apply").click(function(){
      currentWidget.css({
        "color" : $("#dialog-form").find("input[name='color']").val(),
        "font-size" : $("#dialog-form").find("input[name='font-size']").val(),
        "background-color" : $("#dialog-form").find("input[name='background-color']").val(),
        "font-family" : $("#dialog-form").find("input[name='font-family']").val(),
      })
    });
  },
  "textareaModal": function (textarea) {
    currentWidget = $(textarea);
    var modalStructure = $.parseHTML(structure);
    $("#page").append($(modalStructure));
    var fieldset = $(modalStructure).find("fieldset");
    $(fieldset).append("<label for=\"color\">Color</label>");
    $(fieldset).append("<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(textarea).css("color") + "\">");
    $(fieldset).append("<label for=\"font-size\">Font size</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-size\" id=\"font-size\" value=\"" + $(textarea).css("font-size") + "\">");
    $(fieldset).append("<label for=\"background-color\">Background color</label>");
    $(fieldset).append("<input type=\"text\" name=\"background-color\" id=\"background-color\" value=\"" + $(textarea).css("background-color") + "\">");
    $(fieldset).append("<label for=\"font-family\">Font family</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-family\" id=\"font-family\" value=\"" + /*$(label).css("font-family") +*/ "\">");
    setPropertiesDialog();
    $("#modal-apply").click(function(){
      currentWidget.css({
        "color" : $("#dialog-form").find("input[name='color']").val(),
        "font-size" : $("#dialog-form").find("input[name='font-size']").val(),
        "background-color" : $("#dialog-form").find("input[name='background-color']").val(),
        "font-family" : $("#dialog-form").find("input[name='font-family']").val(),
      })
    });
  },
}
