var Action = Serializable.extend("Action",{

	run : function(){
		
	}
	
})


Action.actionTypes = {}; 

Action.extend = function(actionName, prop) {
	prop.__actionType =  {visible: false, editable:false, init:actionName};
	var ret = Serializable.extend.apply(this,[actionName,prop]); 
	Action.actionTypes[actionName] = ret;
	return ret;
}