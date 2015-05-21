var Label = Widget.extend({
  init : function() {
    this._super();
    this.text = "";
    this.html = $("<label>");
  },
  getText : function() {
    return this.text;
  },
  setText : function(text) {
    this.text = text;
    return this.text;
  },
  doubleClick : function(){
	alert("Double click triggered!");  
  },
  addEvents : function(element){
	element.dblclick(this.doubleClick);
	element.draggable();
  },
  draw : function() {
	var element = this.html.text(this.getText()).attr("id", this.getId());
	element.dblclick(this.doubleClick);
	this.addEvents(element);
    $("#page").append(element);
  },
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId());
  }
})