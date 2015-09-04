var TriggerValidationAction = Action.extend("TriggerValidationAction",{
	
	
	__target : {label: "Target widget", init: ""},
	
	run: function(){
		var widget = MockupEditor.getCurrentEditor().getWidgetByName(this.getTarget());
		widget.triggerValidation();
	}
})