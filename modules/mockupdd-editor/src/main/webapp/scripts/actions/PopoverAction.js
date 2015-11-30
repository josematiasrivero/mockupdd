var PopoverAction = Action.extend("PopoverAction",{
	
	
	__message : {label: "Message", init: "", category: "behaviour"},
	
	__target : {label: "Target widget", init: "", category: "behaviour"},
	
	__time : {label: "Time", type: TYPES.Number, init:3000, category: "behaviour"},
	
	
	run: function(){
		var widget = MockupEditor.getCurrentEditor().getWidgetByName(this.getTarget());
		widget.getWrapper().popover({
			trigger: "manual",
			container: "body",
			content: this.getMessage(),
		})
		widget.getWrapper().popover("show");
		setTimeout(function(){
			widget.getWrapper().popover("destroy");
		}, this.getTime())
	}
})