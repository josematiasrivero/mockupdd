/**
 * WidgetId: an id generator for all widgets.
 */

var WidgetId = 1; // hacer un generador de ids.

var IdGenerator = Class.extend({
  init : function() {
    this.next = 0;
  },
  getInstance : function() {
    return this;
  },
  getNext : function() {
    this.next++;
    return this.next;
  }
});

var Widget = Class.extend({
  init : function() {
    this.id = "Widget-id-" + IdGenerator.getInstance().getNext();
    this.x = 0.0; // right position
    this.y = 0.0; // top position
    this.height = 0.0;
    this.width = 0.0;
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
  }
})
