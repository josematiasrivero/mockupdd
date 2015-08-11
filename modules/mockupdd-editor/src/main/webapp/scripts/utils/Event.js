var Event = Serializable.extend("Event",{
	__action : {type: TYPES.Action},
	
	trigger: function(){
		if(this.getAction() != null){
			this.getAction().run();
		}
	}
})