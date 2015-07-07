Type = Class.extend({
	
	posibleValues : function() {
	},
	getTypeView : function(value, id) {
		return (new window[this._typeViewName](value, id));
	}
})

Type.typeClasses = {}
Type.types = {}

TYPES = Type.types;

Type.extend = function(typeName, prop, parametrized) {
	prop = prop || {};
	prop.__typeName =  {init: typeName};
	prop.__typeViewName = {init: typeName+"View"};
	parametrized = parametrized || false;
	var ret = Class.extend.apply(this,[prop]);
	ret.extend = arguments.callee;
	Type.typeClasses[typeName] = ret;
	if(!parametrized)
		Type.types[typeName] = new ret();
	return ret;
}

Type.extend("String");
Type.extend("Text");
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