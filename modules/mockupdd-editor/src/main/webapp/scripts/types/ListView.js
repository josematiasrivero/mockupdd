var ListView = TypeView.extend({
	init : function(value, form, itemType){
		this._super(value, form);
		this._itemType = itemType;
		this._items = [];
		for(item in this._value){
			var itemView = itemType.getListItemView(this._value[item], this._form);
			this._items.push(itemView);
		}
	},
	
	copyEditingValue: function(value){
		return value;
	},
	
	getValue : function(){
		var ret = [];
		for(i in this._items){
			ret.push(this._items[i].getValue());
		}
		return ret;
	},
	
	getDom : function() {
		this._wrapper = $("<div class='row'>");
		var colLeft = $("<div class='col-md-8'>");
		var colRight = $("<div class='col-md-4 list-button-wrapper'>");
		this._wrapper.append(colLeft);
		this._wrapper.append(colRight);
		this._list = $("<ul class='list-group form-list'>");
		

		for(item in this._items){
			this._list.append(this._items[item].getDom());
		}
		
		var addBtn = $("<button class='btn btn-primary'>New</button>");
		var delBtn = $("<button class='btn btn-danger'>Delete</button>");
		
		colLeft.append(this._list);
		colRight.append(addBtn);
		colRight.append(delBtn);
		
		addBtn.click($.proxy(function(){
			var itemType = window[this._itemType.getTypeName()];
			var item = new itemType();
			var listItemView = this._itemType.getListItemView(item, this._form);
			this._items.push(listItemView);
			this._list.append(listItemView.getDom());
		}, this));
		return this._wrapper;
		
	},
	
	
})