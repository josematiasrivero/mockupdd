var TextView = TypeView.extend({
	init : function(value, id){
		this._super(value, id);
	},
	getView : function() {
		return "<textarea class='form-control' id='" + this.getId() + "'>" + this.getValue() + "</textarea>";
	},
})