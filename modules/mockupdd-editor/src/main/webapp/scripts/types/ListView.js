var ListView = TypeView.extend({
	init : function(value, itemType){
		this._super(value);
		this._itemType = itemType;
		this._items = [];
		for(item in this._value){
			this.items.push(new itemType.getListItemView()(item));
		}
	},
	
	copyEditingValue: function(value){
		return value;
	},
	
	getDom : function() {
		this._wrapper = $("<div class='input-group'>");
		this._list = $("<ul class='list-group'>");
		var addBtn = $("<button class='btn btn-primary'>New</button>");
		var delBtn = $("<button class='btn btn-danger'>Delete</button>");
		this._wrapper.append(addBtn);
		this._wrapper.append(delBtn);
		addBtn.click($.proxy(function(){
			var itemType = window[this._itemType.getTypeName()];
			var item = new itemType();
			this._items.push(this._itemType.getListItemView(item));
		}, this));
		return this._wrapper;
		
	},
	
	
})