var structure = "<div id=\"dialog-form\" title=\"Widget properties\">" +
                  "<form>" +
                    "<fieldset>" +
                    "</fieldset>" +
                    "<input id=\"modal-apply\" type=\"button\" value=\"Apply\" style=\"float: right;\"/>" +
                  "</form>" +
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
    var modalStructure = $.parseHTML(structure);
    $("#page").append($(modalStructure));
    var fieldset = $(modalStructure).find("fieldset");
    $(fieldset).append("<label for=\"color\">Color</label>");
    $(fieldset).append("<input type=\"text\" name=\"color\" id=\"color\" value=\"" + $(title).css("color") + "\">");
    $(fieldset).append("<label for=\"font-size\">Font size</label>");
    $(fieldset).append("<input type=\"text\" name=\"font-size\" id=\"font-size\" value=\"" + $(title).css("font-size") + "\">");
    $(fieldset).append("<label for=\"background-color\">Background color</label>");
    $(fieldset).append("<input type=\"text\" name=\"background-color\" id=\"background-color\" value=\"" + $(title).css("background-color") + "\">");
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
