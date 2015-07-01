/**
 * Sets the UI for forms.
 * 
 * @author martin.aparicio.pons@gmail.com
 */

var FormConstructor = Class.extend({
  init : function() {
    this.content = "";
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
  add : function (metadata, currentValue) {
	 var typeView = metadata.type.getTypeView();
	 this._add(this.createLabel(metadata.type.getTypeName) + typeView.getView(currentValue));
  },
  
  /**
   * Adds a Text input field in the form.
   * 
   */
  addTextInput : function(label, value, id) {
    // TODO: Check for XSS in parameters.
    this._add(this._createLabel(label) + this._createInput("text", value, id));
  },

  /**
   * Adds a Number input field in the form.
   * 
   */
  addNumberInput : function(label, value, id) {
    // TODO: Check for XSS in parameters.
    this._add(this._createLabel(label) + this._createInput("number", value, id));
  },

  /**
   * Adds a Textarea field in the form.
   * 
   */
  addTextarea : function(label, value, id) {
    // TODO: Check for XSS in parameters.
    this._add(this._createLabel(label) + this._createTextarea(value, id));
  },

  /**
   * Adds a Select input field in the form.
   * 
   */
  addSelectInput : function(label, value, options, id) {
    // TODO: Check for XSS in parameters.
    this._add(this._createLabel(label) + this._createSelectInput(value, options, id));
  },

  /**
   * Private methods
   */

  _createLabel : function(name) {
    var label = "<label class='control-label col-xs-" + this.getLabelSpace() + "' style='"
        + this.getLabelStyle() + "'>";
    label = label + name + "</label>";
    return label;
  },
  _createInput : function(type, name, id) {
    var div = "<div class='col-xs-" + this.getInputSpace() + "'>";
    var input = "<input class='form-control' type='" + type + "' style='" + this.getInputStyle()
        + "'id='" + id + "' value='" + name + "'>";
    input = div + input + "</input></div>";
    return input;
  },
  _createSelectInput : function(value, options, id) {
    var div = "<div class='col-xs-" + this.getInputSpace() + "'>";
    var input = "<select id='" + id + "'>";
    for ( var v in options) {
      input += "<option value='" + options[v] + "' ";
      if (value === options[v]) {
        input += "selected='selected'";
      }
      input += ">" + options[v] + "</option>";
    }
    return div + input + "</select></div>";
  },
  _createTextarea : function(value, id) {
    var div = "<div class='col-xs-" + this.getInputSpace() + "'>";
    var textarea = "<textarea class='form-control' id='" + id + "'>" + value + "</textarea>";
    textarea = div + textarea + "</div>";
    return textarea;
  },
  _add : function(field) {
    this.setContent(this.getContent() + this._createField(field));
  },
  _createField : function(field) {
    return "<div class='form-group'>" + field + "</div>";
  }
});