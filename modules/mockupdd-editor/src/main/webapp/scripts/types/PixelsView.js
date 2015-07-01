var PixelsView = TypeView.extend({
	init : function(value, id){
		this._super(value, id);
	},
	getView : function() {
		return "<input class='form-control' type='Text' style='" + this.getInputStyle()
        + "'id='" + this.getId() + "' value='" + this.getValue() + "'></input>";
	},
})