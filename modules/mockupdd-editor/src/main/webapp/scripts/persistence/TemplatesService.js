/**
 * The annotation templates with the corresponding name.
 * @type {*[]}
 */
var templates = [
  {template: 'Data({{className|Item type}})', name: 'data'},
  {template: 'List({{className|Item type}})', name: 'list'},
  {template: 'Save({{className|Item type}})', name: 'save'},
  {template: 'Delete({{className|Item type}})', name: 'delete'},
  {template: 'Activate({{className|Item type}})', name: 'activate'},
  {template: 'Data({{className|Item type}}.{{property|Property Name}}:{{dataType|Data type}})', name: 'data'}];

/**
 * A service for the annotation templates.
 * @type {{getTemplates: Function}}
 */
var TemplatesService = {

  /**
   * Get all the annotation templates.
   * @returns {*[]} the annotation templates.
   */
  getTemplates: function () {
    return templates;
  }
};