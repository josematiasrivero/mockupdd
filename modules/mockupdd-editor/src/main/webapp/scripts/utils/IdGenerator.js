/**
 * IdGenerator: an id generator for all classes.
 * 
 * @author (martin.aparicio.pons@gmail.com)
 */
var IdGenerator = new (Class.extend({
  init : function() {
    this.next = 0;
  },
  getNext : function() {
    this.next++;
    return this.next;
  }
}))();
