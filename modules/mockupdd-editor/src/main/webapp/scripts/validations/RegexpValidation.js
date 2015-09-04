var RegexpValidation = Validation.extend("RegexpValidation",{
	
	init : function(){
		this._super();
		this.setRegexp("");
	},
	
	__regexp : {label: "regexp"},
	
	_isValid : function(obj){
		var re = new RegExp(this.getRegexp());
		return re.test(obj);
	}
})