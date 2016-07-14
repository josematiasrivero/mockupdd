
var common = "<div class=\"modal fade in\" id=\"dialog-form\" tabindex=\"-1\" role=\"dialog\" style=\"display: block;\">" +
                  "<div class=\"modal-dialog [[modalSize]]\">" +
                    "<div class=\"modal-content\">" +
                      "<div class=\"modal-header\">" +
                        "<button type=\"button\" class=\"close modal-close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>" +
                        "<h4 class=\"modal-title\" id=\"exampleModalLabel\">[[title]]</h4>" +
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

var propertiesModalTemplate = common.replace("[[title]]", "Widget properties").replace("[[modalSize]]", ""),
  annotationsModalTemplate = common.replace("[[title]]", "Widget annotations").replace("[[modalSize]]", "modal-lg");

var currentWidget;

function setDialogProperties() {
  $(".modal").find(".modal-close").each(function (i, e) {
    $(e).click(function () {
      $(".modal").remove();
    })
  });
}

var Modal = {
  properties : {
    "titleModal": function (title) {
      currentWidget = $(title);
      var modalStructure = $.parseHTML(propertiesModalTemplate);
      $("body").append($(modalStructure));
      var form = $(modalStructure).find("form");
      $(form).append(
        $.parseHTML(
          "<div class=\"form-group\">" +
          "<label for=\"label\" class=\"control-label\">Label:</label>" +
          '<input type="text" name="label" id="label" value="' + $(title).text() +
          '"class="form-control mk-modal-input">' +
          "</div>"));
      $("#modal-apply").click(function () {
        currentWidget.text($("#dialog-form").find("input[name='label']").val());
      });
      setDialogProperties();
    },

    "labelModal": function (label) {
      currentWidget = $(label);
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
    },

    "inputModal": function (input) {
      currentWidget = $(input);
      var modalStructure = $.parseHTML(propertiesModalTemplate);
      $("body").append($(modalStructure));
      var form = $(modalStructure).find("form");
      $(form).append(
        $.parseHTML(
          "<div class=\"form-group\">" +
          "<label for=\"placeholder\" class=\"control-label\">Placeholder:</label>" +
          "<input type=\"text\" name=\"placeholder\" id=\"placeholder\" value=\"" + $(input).attr("placeholder") +
          '"class="form-control mk-modal-input">' +
          "</div>"));
      $("#modal-apply").click(function () {
        currentWidget.attr("placeholder", $("#dialog-form").find("input[name='placeholder']").val());
      });
      setDialogProperties();
    },

    "buttonModal": function (button) {
      currentWidget = $(button);
      var modalStructure = $.parseHTML(propertiesModalTemplate);
      $("body").append($(modalStructure));
      var form = $(modalStructure).find("form");
      $(form).append(
        $.parseHTML(
          "<div class=\"form-group\">" +
          "<label for=\"label\" class=\"control-label\">Label:</label>" +
          "<input type=\"text\" name=\"label\" id=\"label\" value=\"" + $(button).text() +
          '"class="form-control mk-modal-input">' +
          "</div>"));
      $("#modal-apply").click(function () {
        currentWidget.text($("#dialog-form").find("input[name='label']").val());
      });
      setDialogProperties();
    },

    "panelModal": function (panel) {
      currentWidget = $(panel);
      var modalStructure = $.parseHTML(propertiesModalTemplate);
      $("body").append($(modalStructure));
      // Nothing by now
      setDialogProperties();
    },

    "textareaModal": function (textarea) {
      currentWidget = $(textarea);
      var modalStructure = $.parseHTML(propertiesModalTemplate);
      $("body").append($(modalStructure));
      var form = $(modalStructure).find("form");
      $(form).append(
        $.parseHTML(
          "<div class=\"form-group\">" +
          "<label for=\"placeholder\" class=\"control-label\">Placeholder:</label>" +
          "<input type=\"text\" name=\"placeholder\" id=\"placeholder\" value=\"" + $(textarea).attr("placeholder") +
          '"class="form-control mk-modal-input">' +
          "</div>"));
      $("#modal-apply").click(function () {
        currentWidget.attr("placeholder", $("#dialog-form").find("input[name='placeholder']").val());
      });
      setDialogProperties();
    }
  },
  annotations: function ($html) {
    currentWidget = $html;
    var modalStructure = $.parseHTML(annotationsModalTemplate);
    $('body').append($(modalStructure));
    var form = $(modalStructure).find('form');
    $(form).append($.parseHTML(
      '<div class="form-inline" style="margin-bottom:25px;">' +
        '<div class="form-group">' +
          '<label for="addAnnotation" aria-label="Add Annotation"></label>' +
          '<select class="form-control" id="addAnnotation">' +
            '<option value="1">Data({{className | Item type}})</option>' +
            '<option value="2">List({{className | Item type}})</option>' +
            '<option value="3">Save({{className | Item type}})</option>' +
            '<option value="4">Delete({{className | Item type}})</option>' +
            '<option value="5">Activate({{className | Item type}})</option>' +
            '<option value="6">Data({{className|Item type}}.{{property|Property Name}}:{{dataType|Data type}}</option>' +
          '</select>' +
        '</div>' +
        '<button class="btn btn-success pull-right">Add</button>' +
      '</div>' +
      '<div class="form-inline">' +
        '<div class="form-group">' +
          '<label for="removeAnnotation" aria-label="Remove Annotation"></label>' +
          '<select class="form-control" id="removeAnnotation">' +
            // TODO: Here should be the annotations of the widget
            '<option value="1">Data({{className | Item type}})</option>' +
            '<option value="2">List({{className | Item type}})</option>' +
          '</select>' +
        '</div>' +
        '<button class="btn btn-warning pull-right">Remove</button>' +
      '</div>'
    ));
  }
};
