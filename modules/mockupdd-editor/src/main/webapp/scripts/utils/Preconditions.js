var Preconditions = {
  check: function(variable, type, name) {
    if (typeof variable !== type) {
      throw 'Preconditions exception: variable ' + (name ? '"' + name + '"' : '') + ' must be of type "' + type + '" and is of type "' + typeof variable + '".';
    }
  }
}
