var Widget = Class.extend({
  init : function() {
    this.id = "Widget-id-" + IdGenerator.getNext();
    this.x = 0.0; // right position
    this.y = 0.0; // top position
    this.height = 0.0;
    this.width = 0.0;
  },
  serialize : function() {
    // abstract method to be implemented in the subclasses
  },
  unserialize : function() {
    // abstract method to be implemented in the subclasses
  },
  getId : function() {
    return this.id;
  },
  getOrigin : function() {
    return [ this.x, this.y ];
  },
  setOrigin : function(x, y) {
    this.x = x;
    this.y = y;
    return [ x, y ];
  },
  getHeight : function() {
    return this.height;
  },
  setHeight : function(height) {
    this.height = height;
    return height;
  },
  getWidth : function() {
    return this.width;
  },
  setWidth : function(width) {
    this.width = width;
    return width;
  },
  /** Deletes the widget from the DOM. */
  erase : function() {
    // If it has a container parent, delete it (with the widget).
    if ($("#container-" + this.getId())[0] !== undefined) {
      $("#container-" + this.getId()).remove();
    } else {
      // else, delete only the widget.
      $("#" + this.getId()).remove();
    }
    PersistenceManager.deleteWidget(this);
  }
})
