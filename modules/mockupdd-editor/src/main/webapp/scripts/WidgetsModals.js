/*
 * Document: WidgetsModals.js
 * Description: contains all the information of widget's modals for properties or annotations.
 */


/*
 * 'common' is the structure of the modal for all widgets.
 * It'll be created every time the option properties of the
 * context menu is selected, and then removed when closing.
 * Inside 'form' tag, will be added the options of the specify widgets.
 */
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

// Define the modal templates for properties and annotations respectively.
var propertiesModalTemplate = common.replace("[[title]]", "Widget properties").replace("[[modalSize]]", ""),
  annotationsModalTemplate = common.replace("[[title]]", "Widget annotations").replace("[[modalSize]]", "modal-lg");

/*
 * 'currentWidget' will contain a reference to the current widget open (for properties or annotations).
 * 'attrName' has all the possible Annotations names.
 * 'templates' has the default information for the Annotations.
 */
var currentWidget, templates = [
    'Data({{className|Item type}})',
    'List({{className|Item type}})',
    'Save({{className|Item type}})',
    'Delete({{className|Item type}})',
    'Activate({{className|Item type}})',
    'Data({{className|Item type}}.{{property|Property Name}}:{{dataType|Data type}})'],
  attrName = ['data', 'list', 'save', 'delete', 'activate', 'data'];

function setDialogProperties() {
  $(".modal").find(".modal-close").each(function (i, e) {
    $(e).click(function () {
      $(".modal").remove();
    })
  });
}


var Modal = {
  /*
   * 'properties' is a dictionary, which has all the different modals for widgets
   * properties, where the key is the widget name plus the word 'Modal'.
   * Each widget define what it needs to have inside the modal.
   */
  properties: {
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
  
  /*
   * 'annotations' is a function, which has the information for widget annotations,
   * and recieve by parameter the widget's html.
   */
  annotations: function ($html) {
    currentWidget = $html;
    var $modalStructure = $($.parseHTML(annotationsModalTemplate));
    $modalStructure.find('#modal-apply').hide();
    $('body').append($modalStructure);
    var form = $modalStructure.find('form');
    $(form).append($.parseHTML(function () {
      var res = '<div class="form-inline" style="margin-bottom:25px;">' +
        '<div class="form-group">' +
        '<label for="addAnnotation" aria-label="Add Annotation"></label>' +
        '<select class="form-control" id="addAnnotation">';
      for (var t in templates) if (templates.hasOwnProperty(t)) {
        res += '<option value="' + t + '"> ' + templates[t] + '</option>';
      }
      res += '</select>' +
        '</div>' +
        '<span id="acceptedAnnotation" class="fa fa-check" title="Annotation added successfully" style="color: darkgreen; display:none;"/>' +
        '<button id="confirmAddAnnotation" class="btn btn-success pull-right">Add</button>' +
        '</div>' +
        '<div class="form-inline">' +
        '<div class="form-group">' +
        '<label for="removeAnnotation" aria-label="Remove Annotation"></label>' +
        '<select class="form-control" id="removeAnnotation">';

      var id = 0;

      function _addData(attr) {
        var s = $html.attr('data-mockupdd-' + attr);
        if (!s) return;
        JSON.parse(s).forEach(function (v) {
          res += '<option value="' + (id++) + '">' + v + '</option>';
        });
      }

      // We omit the last one so we do not count 'data' twice
      for (var i = 0; i < attrName.length - 1; i++) {
        _addData(attrName[i]);
      }
      return res + '</select>' +
        '</div>' +
        '<button class="btn btn-warning pull-right">Remove</button>' +
        '</div>';
    }()));
    $('#confirmAddAnnotation').click(function (e) {
      e.preventDefault();
      var t = $('#addAnnotation').val();
      if (!templates.hasOwnProperty(t)) throw 't is not valid'; // For XSS.
      var attr = $html.attr('data-mockupdd-' + attrName[t]);
      if (!attr) {
        // If the attr is empty, add only the new template.
        $html.attr('data-mockupdd-' + attrName[t], '["' + templates[t] + '"]')
      } else {
        // We remove the last ']' and then add the new template.
        $html.attr('data-mockupdd-' + attrName[t], attr.substr(0, attr.length - 1) + ', "' + templates[t] + '"]');
      }
      // Note that this code below is quick and dirty.
      var $acceptedAnnotation = $('#acceptedAnnotation');
      $acceptedAnnotation.show();
      setTimeout(function () {
        $acceptedAnnotation.hide();
      }, 4000);
    });
    setDialogProperties();
  }
};


// This is a regex that catches everything between {{ and }}: \{\{(.*?)}}/g
