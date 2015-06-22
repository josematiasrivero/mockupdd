var PersistenceManager = new (Class.extend({
  init : function() {
    this.widgets = {};
    this.numberOfWidgets = 0;
    this.dirty = false;
    // Calls saveMockup() every 5 seconds
    setInterval($.proxy(this.saveMockup, this), 5000);
  },
  startupMockup : function(id, name, json) {
    this.mockupId = id;
    this.mockupName = name;
    if (json) {
      var jsonData = JSON.parse(json);
      for (var i in jsonData) {
        var widget = Widget.unserialize(jsonData[i]);
        this.widgets[widget.getId()] = widget;
        widget.draw();
      }
    }
    this.dirty = false;
    $("#persistence-state").html("Saved");
  },
  saveMockup : function() {
    if (this.dirty) {
      var arr = new Array();
      for ( var w in this.widgets) {
        if (this.widgets.hasOwnProperty(w)) {
          arr.push(this.widgets[w].serialize());
        }
      }
      $("#persistence-state").html("Saving");
      MockupRESTClient.updateMockup(
          this.mockupId, 
          this.mockupName, 
          arr, 
          $.proxy(function() {
            this.dirty = false;
            $("#persistence-state").html("Saved");
          }, this),
          $.proxy(function() {
            $("#persistence-state").html("Dirty");
            alert("Error when trying to connect with server.");
          }, this)
      );
    }
  },
  addWidget : function(widget) {
    this.widgets[widget.getId()] = widget;
    this.numberOfWidgets++;
    this.dirty = true;
    $("#persistence-state").html("Dirty");
  },
  updateWidget : function(widget) {
    this.widgets[widget.getId()] = widget;
    this.dirty = true;
    $("#persistence-state").html("Dirty");
  },
  deleteWidget : function(widget) {
    delete this.widgets[widget.getId()];
    this.dirty = true;
    $("#persistence-state").html("Dirty");
  }
}))();
