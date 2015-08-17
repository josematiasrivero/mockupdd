var AlertAction = Action.extend("AlertAction",{
	__message : {label: "Message"},
	
	run: function(){
		alert(this.getMessage())
	}
})