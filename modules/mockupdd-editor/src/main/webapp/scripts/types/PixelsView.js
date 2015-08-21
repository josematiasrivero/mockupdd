var PixelsView = TypeView.extend({
	init : function(value){
		this._super(value);
		this._dom = $("<input class='form-control' type='Text' value='" + this._value + "'></input>");
	},
	
	getValue: function(){
		return this._dom.val();
	},
	
})