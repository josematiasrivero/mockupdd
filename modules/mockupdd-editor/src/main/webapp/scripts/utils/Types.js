Type = Class.extend({
	
	posibleValues : function(){
		
	}
})

Type.typeClasses = {}
Type.types = {}

TYPES = Type.types;

Type.extend = function(typeName, prop, parametrized) {
	prop = prop || {};
	prop.__typeName =  {init: typeName};
	parametrized = parametrized || false;
	var ret = Class.extend.apply(this,[prop]);
	ret.extend = arguments.callee;
	Type.typeClasses = ret;
	if(!parametrized)
		Type.types[typeName] = new ret();
	return ret;
}

Type.extend("String");
Type.extend("Color");
Type.extend("FontSize");
Type.extend("BootstrapStyle");
Type.extend("Pixels");
Type.extend("List",{
	
	init: function(itemType){
		this.setItemType(itemType);
	},

	__itemType : {}
	
},true)