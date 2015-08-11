/**
 * Sets the UI for forms.
 * 
 * @author martin.aparicio.pons@gmail.com
 */

var FormConstructor = Class.extend({
  init : function() {
    this.content = [];
    this.labelSpace = "3";
    this.labelStyle = "";
    this.inputSpace = "9";
  },
  getContent : function() {
    return this.content;
  },
  setContent : function(content) {
    this.content = content;
    return this.content;
  },
  getLabelSpace : function() {
    return this.labelSpace;
  },
  setLabelSpace : function(space) {
    this.labelSpace = space;
    return this.labelSpace;
  },
  getLabelStyle : function() {
    return this.labelStyle;
  },
  setLabelStyle : function(style) {
    this.labelStyle = style;
    return this.labelStyle;
  },
  getInputSpace : function() {
    return this.inputSpace;
  },
  setInputSpace : function(space) {
    this.inputSpace = space;
    return this.inputSpace;
  },
  
  /**
   * Receive the metadata, and depending of the type call the corresponding method
   */
  add : function (widgetName, propertyName, metadata, currentValue) {
	 var typeView = metadata.type.getTypeView(currentValue, widgetName + "-" + propertyName);
	 this._add(metadata.label, typeView.getView());
  },

  /**
   * Private methods
   */

  _createInput : function(field){
	var wrapper = $("<div />");
	wrapper.addClass("col-xs-"+this.getInputSpace());
	wrapper.append(field);
	return wrapper;
  },
  
  _createLabel : function(name) {
    var label = "<label class='control-label col-xs-" + this.getLabelSpace() + "' style='"
        + this.getLabelStyle() + "'>";
    label = label + name + "</label>";
    return $(label);
  },

  _add : function(label,field) {
    this.content.push(this._createField(label,field));
  },
  _createField : function(label, field) {
    var wrapper = $("<div class='form-group'/>");
    wrapper.append(this._createLabel(label))
    wrapper.append(this._createInput(field));
    return wrapper;
  }
});