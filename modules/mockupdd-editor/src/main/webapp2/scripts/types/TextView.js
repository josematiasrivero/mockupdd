var TextView = TypeView.extend({
	init : function(value){
		this._super(value);
		this._dom= $("<textarea class='form-control' >" + this._value + "</textarea>");
	},

	
	getValue : function(){
		return this._dom.val();
	}
	
})