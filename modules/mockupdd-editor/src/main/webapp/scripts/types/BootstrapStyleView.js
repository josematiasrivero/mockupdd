var BootstrapStyleView = TypeView.extend({
	init : function(value){
		this._super(value);
		
		this._dom = $("<select class='form-control'/>");
		for (var o in Styles.values) {
			var option= $("<option />")
			option.html(Styles.values[o]);
			option.attr("value", Styles.values[o]);
			if (this._value === Styles.values[o]) {
				option.attr("selected",'selected');
			}
			this._dom.append(option);
		}
		
	},
	
	getValue : function(){
		return this._dom.val();
	}

})