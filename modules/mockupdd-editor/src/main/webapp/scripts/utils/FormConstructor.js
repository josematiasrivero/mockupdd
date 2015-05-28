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
    this.inputStyle = "margin-bottom:10px;";
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
  getInputStyle : function() {
    return this.inputStyle;
  },
  setInputStyle : function(style) {
    this.inputStyle = style;
    return this.inputStyle;
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
   * Adds a Text input field in the form.
   * 
   */
  addNumberInput : function(label, value, id) {
    // TODO: Check for XSS in parameters.
    this._add(this._createLabel(label) + this._createInput("number", value, id));
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
  _add : function(field) {
    this.setContent(this.getContent() + this._createField(field));
  },
  _createField : function(field) {
    return "<div class='form-group'>" + field + "</div>";
  }
});