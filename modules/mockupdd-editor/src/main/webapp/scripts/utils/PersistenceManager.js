var PersistenceManager = new (Class.extend({
  init : function() {
    this.widgets = {};
    this.numberOfWidgets = 0;
    this.dirty = false;
    //Calls saveMockup() every 5 seconds
    setInterval($.proxy(this.saveMockup, this), 5000);
  },
  startupMockup : function(id, name, json) {
    this.mockupId = id;
    this.mockupName = name;
    var jsonData = JSON.parse(json);
    for (var i in jsonData) {
      //WARNING it'd be recommended to avoid the possible XSS here
      //Possible solution: ask for every widget name
      var id = jsonData[i][1][0];
      this.widgets[id] = eval("new " + jsonData[i][0] + "()");
      this.widgets[id].unserialize(jsonData[i][1]);
      this.widgets[id].draw();
    }
  },
  saveMockup : function() {
    if (this.dirty) {
      var arr = new Array();
      for (w in this.widgets) arr.push(this.widgets[w].serialize());
      MockupRESTClient.updateMockup(
          this.mockupId, 
          this.mockupName, 
          arr, 
          $.proxy(function() {this.dirty = false;}, this), 
          function() {alert("Error when trying to connect with server.")}
      );
    }
  },
  addWidget : function(widget) {
    this.widgets[widget.getId()] = widget;
    this.numberOfWidgets++;
    this.dirty = true;
  },
  updateWidget : function(widget) {
    this.widgets[widget.getId()] = widget;
    this.dirty = true;
  },
  deleteWidget : function(widget) {
    delete this.widgets[widget.getId()];
    this.dirty = true;
  }
}))();
