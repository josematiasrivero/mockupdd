var AlertAction = Action.extend("AlertAction",{
	__message : {},
	
	run: function(){
		alert(this.getMessage())
	}
})