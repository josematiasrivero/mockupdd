var Label = Widget.extend({
  init : function() {
    this._super();
    this.text = "";
    this.color = "black";
    this.html = $("<label>");
  },
  getText : function() {
    return this.text;
  },
  setText : function(text) {
    this.text = text;
    return this.text;
  },
  getColor : function() {
    return this.color;
  },
  setColor : function(color) {
    this.color = color;
    return this.color;
  },
  doubleClick : function(){
	$("#myModal .modal-title").empty();
	$("#myModal .modal-title").html('Label');
	$("#myModal .modal-body").empty();
	$("#myModal .modal-body").html(
        '<div class="col-xs-9" style="margin: auto; float:left;">' +
        	'<label class="col-xs-3 control-label">Text</label>' +
        	'<div class="col-xs-9">' +
        		'<input type="text" id="label-text" class="form-control" name="labeltext" value="' +
        			this.getText() +
        		'" />' +
        	'</div>' +
    	'</div>' +
        '<div class="col-xs-9" style="margin: 10px auto auto auto; float:left;">' +
	    	'<label class="col-xs-3 control-label">Color</label>' +
	    	'<div class="col-xs-9">' +
				'<input type="text" id="label-color" class="form-control" name="labelcolor" value="' +
					this.getColor() +
				'" />' +
			'</div>' +
	    '</div>');
	$("#myModal .modal-body").css("height", "100px");
	$("#save-changes").click($.proxy(this.persist, this));
	$("#close").click($.proxy(function(){$("#save-changes").off("click");}, this));
	$("#myModal").draggable();
	$("#myModal").modal('show');
  },
  addEvents : function(element){
	element.dblclick($.proxy(this.doubleClick, this));
	element.draggable();
  },
  draw : function() {
	var element = this.getHtml();
	this.addEvents(element);
    $("#page").append(element);
  },
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId()).css("color", this.getColor()).css("position", "absolute");
  },
  persist : function() {
	  //No chequea datos.
	  text = $("#label-text").val();
	  this.setText(text);
	  $("#"+this.getId()).text(this.getText());
	  color = $("#label-color").val();
	  this.setColor(color);
	  $("#"+this.getId()).css("color", this.getColor());
  }
})