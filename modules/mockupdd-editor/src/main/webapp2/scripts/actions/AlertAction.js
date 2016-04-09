var AlertAction = Action.extend("AlertAction",{
	__message : {label: "Message", category: "behaviour"},
	
	run: function(){
		alert(this.getMessage())
	}
})