/*
 * Document: Preconditions.js
 * Description: contains different kind of checking functions.
 */

var Preconditions = {
  // 'checkType' checks if 'variable' is of type 'type', throwing an exception if not.
  checkType: function (variable, type, name) {
    if (typeof variable !== type) {
      throw 'Preconditions exception: variable ' + (name ? '"' + name + '"' : '') + ' must be of type "' + type + '" and is of type "' + typeof variable + '".';
    }
  }
}
