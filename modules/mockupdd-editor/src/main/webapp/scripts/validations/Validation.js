var Validation = Serializable.extend("Validation", {
	
	init : function(){
		this.setSuccessEvent(new Event());
		this.setFailureEvent(new Event());
	},
	
	__successEvent : {type:TYPES.Event, label: "success"},
	__failureEvent : {type:TYPES.Event, label: "failure"},
	
	_isValid : function(obj){
		throw "Method not implemented"; //Subclasses should override;
	},
	
	validate : function(obj){
		if(this._isValid(obj)){
			this.getSuccessEvent().trigger();
		} else {
			this.getFailureEvent().trigger();
		}
	}
	
})

Validation.validationTypes = {}; 

Validation.extend = function(validationName, prop) {
	prop.__validationType =  {visible: false, editable:false, init:validationName};
	var ret = Serializable.extend.apply(this,[validationName,prop]); 
	Validation.validationTypes[validationName] = ret;
	return ret;
}