var Title = Widget.extend({
  init : function() {
    this._super();
    this.text = "";
    this.html = $("<h2>");
  },
  getText : function() {
    return this.text;
  },
  setText : function(text) {
    this.text = text;
    return this.text;
  },
  getHtml : function() {
    return this.html.text(this.getText()).attr("id", this.getId());
  }
})
