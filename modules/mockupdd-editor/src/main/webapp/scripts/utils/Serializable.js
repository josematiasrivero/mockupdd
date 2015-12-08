var Serializable = Class.extend({
	
  serialize : function() {
	var repr = {}
	var metadata = this.getMetadata();
    for(var prop in metadata){
    	if(metadata[prop].serializable == true){
    		if(metadata[prop].type.isComplex()){
    			if(this.getProperty(prop) != null){
    				var value = this.getProperty(prop);
    				if(value instanceof Array){
    					repr[prop] = [];
    					for(i in value){
    						if(metadata[prop].type.getItemType().isComplex()){
        						repr[prop].push(value[i].serialize());
    						} else {
    							repr[prop] = value[i];
    						}

    					}
    				} else {
    					repr[prop] = this.getProperty(prop).serialize();
    				}
    			}
    		} else {
    			repr[prop] = this.getProperty(prop);
    		}
    	}
    }
    return repr;
  },
  unserialize : function(repr) {
	  for(var prop in repr){
		  if(this.getMetadata()[prop].type.isComplex()){
			  //This property needs to be deserialized recursively.
			   this.setProperty(prop,Serializable.unserialize(repr[prop]));
		  } else {
			  this.setProperty(prop,repr[prop]); 
		  }
	  }
		  
  },
  
  clone: function(){
	  return Serializable.unserialize(this.serialize());
  }
})


Serializable.unserialize = function(repr){
	if(repr == null)
		return null;
	if(repr instanceof Array){
		var list = [];
		for (var i in repr){
			var item = repr[i];
		    var serializable = new Serializable.types[item.serializationType];
			list.push(serializable);
		}
		return list;
	} else {
	    var serializable = new Serializable.types[repr.serializationType]
	    serializable.unserialize(repr);
	    return serializable;
	}
}

Serializable._defaultMetadata = {
  visible : true,		// Whether this should be visible in the UI.
  editable : true,		// Whether this should be editable in the UI.
  serializable : true,	// Whether this should be serialized.
  category: "visual",
  init: null,
  type: TYPES.String,
},

Serializable.types = {};

Serializable.extend = function(typeName, prop) {
	prop.__serializationType =  {visible: false, editable:false, init:typeName};
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
