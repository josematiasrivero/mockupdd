var Serializable = Class.extend({
	
  serialize : function() {
	var repr = {}
	var metadata = this.getMetadata();
    for(var prop in metadata){
    	if(metadata[prop].serializable == true){
    		repr[prop] = this.getProperty(prop);
    	}
    }
    return repr;
  },
  unserialize : function(repr) {
	  for(prop in repr){
		  this.setProperty(prop,repr[prop]); // TODO, support complex
												// properties.
	  }
  },
})


Serializable.unserialize = function(repr){
    var serializable = new Serializable.types[repr.type]
    serializable.unserialize(repr);
    return serializable;
}

Serializable._defaultMetadata = {
  visible : true,		// Whether this should be visible in the UI.
  editable : true,		// Whether this should be editable in the UI.
  serializable : true,	// Whether this should be serialized.
  category: "visual",
  type: TYPES.String
},

Serializable.types = {};

Serializable.extend = function(typeName, prop) {
	prop.__type =  {visible: false, editable:false, init:typeName};
	for (var name in prop) {
		if (typeof prop[name] == "object" && name.startsWith("__")) {
			for (field in Serializable._defaultMetadata) {
				if(prop[name][field] === undefined)
					prop[name][field] = Serializable._defaultMetadata[field]; 
			}
		}
	}
	var ret = Class.extend.apply(this,[prop]);
	ret.extend = arguments.callee;
	ret.typeName = typeName;
	Serializable.types[typeName] = ret;
	return ret;
}
