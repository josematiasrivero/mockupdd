
var structure = "<div class=\"modal fade in\" id=\"dialog-form\" tabindex=\"-1\" role=\"dialog\" style=\"display: block;\">" +
                  "<div class=\"modal-dialog\">" +
                    "<div class=\"modal-content\">" +
                      "<div class=\"modal-header\">" +
                        "<button type=\"button\" class=\"close modal-close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
                        "<h4 class=\"modal-title\" id=\"exampleModalLabel\">Widgets properties</h4>" +
                      "</div>" +
                      "<div class=\"modal-body\">" +
                        "<form>" +
                        "</form>" +
                      "</div>" +
                      "<div class=\"modal-footer\">" +
                        "<button type=\"button\" class=\"btn btn-default modal-close\" data-dismiss=\"modal\">Close</button>" +
                        "<button id=\"modal-apply\" type=\"button\" class=\"btn btn-primary\">Apply</button>" +
                      "</div>" +
                    "</div>" +
                  "</div>" +
                "</div>";

var currentWidget;

function setDialogProperties() {
  $(".modal").find(".modal-close").each(function (i, e) {
    $(e).click(function(){
      $(".modal").remove();
    })
  });
};

var Modal = {
  "titleModal": function (title) {
    currentWidget = $(title);
    var modalStructure = $.parseHTML(structure);
    $("body").append($(modalStructure));
    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
          "<label for=\"label\" class=\"control-label\">Label:</label>" +
          "<input type=\"text\" name=\"label\" id=\"label\" value=\"" + $(title).text() + "\">" +
        "</div>"));
    $("#modal-apply").click(function(){
      currentWidget.text($("#dialog-form").find("input[name='label']").val());
    });
    setDialogProperties();
  },

  "labelModal": function (label) {
    currentWidget = $(label);
    var modalStructure = $.parseHTML(structure);
    $("body").append($(modalStructure));
    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
          "<label for=\"label\" class=\"control-label\">Label:</label>" +
          "<input type=\"text\" name=\"label\" id=\"label\" value=\"" + $(label).text() + "\">" +
        "</div>"));
    $("#modal-apply").click(function(){
      currentWidget.text($("#dialog-form").find("input[name='label']").val());
    });
    setDialogProperties();
  },

  "inputModal": function (input) {
    currentWidget = $(input);
    var modalStructure = $.parseHTML(structure);
    $("body").append($(modalStructure));
    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
          "<label for=\"placeholder\" class=\"control-label\">Placeholder:</label>" +
          "<input type=\"text\" name=\"placeholder\" id=\"placeholder\" value=\"" + $(input).attr("placeholder") + "\">" +
        "</div>"));
    $("#modal-apply").click(function(){
      currentWidget.attr("placeholder", $("#dialog-form").find("input[name='placeholder']").val());
    });
    setDialogProperties();
  },

  "buttonModal": function (button) {
    currentWidget = $(button);
    var modalStructure = $.parseHTML(structure);
    $("body").append($(modalStructure));
    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
          "<label for=\"label\" class=\"control-label\">Label:</label>" +
          "<input type=\"text\" name=\"label\" id=\"label\" value=\"" + $(button).text() + "\">" +
        "</div>"));
    $("#modal-apply").click(function(){
      currentWidget.text($("#dialog-form").find("input[name='label']").val());
    });
    setDialogProperties();
  },

  "panelModal": function (panel) {
    currentWidget = $(panel);
    var modalStructure = $.parseHTML(structure);
    $("body").append($(modalStructure));
    // Nothing by now
    setDialogProperties();
  },

  "textareaModal": function (textarea) {
    currentWidget = $(textarea);
    var modalStructure = $.parseHTML(structure);
    $("body").append($(modalStructure));
    var form = $(modalStructure).find("form");
    $(form).append(
      $.parseHTML(
        "<div class=\"form-group\">" +
          "<label for=\"placeholder\" class=\"control-label\">Placeholder:</label>" +
          "<input type=\"text\" name=\"placeholder\" id=\"placeholder\" value=\"" + $(textarea).attr("placeholder") + "\">" +
        "</div>"));
    $("#modal-apply").click(function(){
      currentWidget.attr("placeholder", $("#dialog-form").find("input[name='placeholder']").val());
    });
    setDialogProperties();
  },
}
