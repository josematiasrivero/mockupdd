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
	  },
	  
	  this.getSetter = function(prop){
		  return $.proxy(this[Class.setterName(prop)],this);
	  },
	  
	  this.getGetter = function(prop){
		  return $.proxy(this[Class.getterName(prop)],this);
	  },
	  
	  this.getProperty = function(prop){
		  return this.getGetter(prop).apply(this,[prop]);
	  },
	  
	  //TODO grayfox: Support setters with many parameters.
	  this.setProperty = function(prop, val){
		  return this.getSetter(prop).apply(this,[val]);
	  },
	  
	  this._metadata = {};
  };
  
  Class.setterName = function(prop){
	  return "set"+prop[0].toUpperCase() + prop.slice(1)
  }
  
  Class.getterName = function(prop){
	  return "get"+prop[0].toUpperCase() + prop.slice(1)
  }
  
  Class.defaultPropertyGetter = function (prop){
	  return function(){
		  return this["_"+prop];
	  }
  }
  
  Class.defaultPropertySetter = function (prop){
	  return function(val){
		  this["_"+prop] = val;
		  return val;
	  }
  }
  
  var Clazz = Class;
  
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    prototype._metadata = $.extend(true,{},prototype._metadata);
    initializing = false;
    var expandedProps = {}
    
    for(var name in prop){
    	if( typeof prop[name] == "object" && name.startsWith("__")){
    		var propName = name.slice(2);
    		prototype._metadata[propName] = prop[name];
    		var camelPropName = propName[0].toUpperCase() + propName.slice(1);
    		expandedProps["get"+camelPropName] = prop[name].get || Clazz.defaultPropertyGetter(propName);
    		expandedProps["set"+camelPropName] = prop[name].set || Clazz.defaultPropertySetter(propName);
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
		if(!initializing){
			for (var name in this.getMetadata()) {
				if (this.getMetadata()[name].init !== undefined) {
					this.getSetter(name).apply(this,[(this.getMetadata()[name].init)]);
				}
			}
		}
		// All construction is actually done in the init method
		if (!initializing && this.init){
			this.init.apply(this, arguments);
		}
	}
    
    // Populate our constructed prototype object
    Class.prototype = prototype
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})();