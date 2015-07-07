/**
 * Creates the modal for edition and deletion of widgets
 * 
 * @author martin.aparicio.pons@gmail.com
 */

var ModalConstructor = new (Class.extend({
  init : function(){
    this.id = "#myModal";
  },
  getId : function(){
    return this.id;
  },
  /**
   * Draws and shows the modal
   * 
   * @params the widget name, html form and context.
   */
  draw : function(widgetName, htmlForm, widgetContext) {
    // Adds the title text
    $(this.getId() + " .modal-title").empty();
    $(this.getId() + " .modal-title").html(widgetName);
    // Adds the html form
    $(this.getId() + " .modal-body").empty();
    $(this.getId() + " .modal-body").html(htmlForm);
    // TODO: remove the hardcoded height
    $(this.getId() + " .modal-body").css("height", "220px");
    // Adds click events for the save changes and widget deletion.
    debugger;
    $(this.getId()).find("#save-changes").click($.proxy(widgetContext.persist, widgetContext));
    $(this.getId()).find("#delete-widget").click($.proxy(widgetContext.erase, widgetContext));
    
    $(this.getId()).draggable();
    $(this.getId()).modal('show');
  }
}))();