/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype


/*
 * 
 * Modified to be able to attach metadata to properties.
 * 
 * How to use: 
 * 	When extending a subclass, declare a dict with a name startin with "__", 
 *  for example:
 *  
 *  	__myProperty : {type:"string"}
 *  
 *  This will create a getter and setter (getMyProperty, setMyProperty), as well as a field
 *  (_myProperty). The metadata you defined can be accessed using the method getMetadata().
 *  Full example:
 *  
 *  Test = Class.extend({
 *  
 *  	__name= {type:"string", maxLength:64}
 *  
 *  })
 *  
 *  t = new Test()
 *  
 *  t.setName("Jonh")
 *  
 *  t.getName()
 *  > "Jonh"
 *  t.getMetadata().name.type
 *  >"string"
 */
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  this.Class = function(){
	  
	  this.getMetadata = function (){
		  return this._metadata
	  }
	  
	  this._propertyGetter = function (prop){
		  return function(){
			  return this["_"+prop];
		  }
	  }
	  
	  this._propertySetter = function (prop){
		  return function(val){
			  this["_"+prop] = val;
		  }
	  }
	  
	  this._metadata = {};
  };
  

  

  
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    var expandedProps = {}
    
    for(var name in prop){
    	if( typeof prop[name] == "object" && name.startsWith("__")){
    		var propName = name.slice(2);
    		prototype._metadata[propName] = prop[name];
    		var camelPropName = propName[0].toUpperCase() + propName.slice(1);
    		expandedProps["get"+camelPropName] = prototype.propertyGetter(propName);
    		expandedProps["set"+camelPropName] = prototype.propertySetter(propName);
    	} else {
    		expandedProps[name] = prop[name];
    	}
    }
    
    prop = expandedProps;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})();