var ColorView = TypeView.extend({
	init : function(value, id){
		this._super(value, id);
		this._dom=$("<input class='form-control' type='Text' value='" + this._value + "'/>");
	},
	getValue : function() {
		return this._dom.val();
	},
})