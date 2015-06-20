widgetsName = {}; //This dictionary is going to have the functions to create the new labels
                  //For example, widgetsName["Label"] = Label;
var Widget = Class.extend({
	
  init : function(id) {
    if (typeof id === 'undefined') {
      this.id = "Widget-id-" + IdGenerator.getNext();
    } else {
      this.id = id;
    }
    this.x = "0px"; // right position
    this.y = "0px"; // top position
    this.height = "50px";
    this.width = "100px";
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
  },
  persist : function() {
    // abstract method to be implemented in the subclasses
  }
})
