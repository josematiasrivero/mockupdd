/**
 * IdGenerator: an id generator for all classes.
 * 
 * @author (martin.aparicio.pons@gmail.com)
 */
var IdGenerator = new (Class.extend({
  init : function() {
  },
  getNext : function() {
    return CryptoJS.MD5((new Date()).toString()).toString();
  }
}))();
