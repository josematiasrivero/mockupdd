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
	
	_buildList : function(){
		this._colLeft.empty();
		this._list = $("<div class='list-group form-list'>");
		

		for(item in this._items){
			var dom = this._items[item].getDom();
			this._list.append(dom);
			var self = this;
			dom.click(function(){
				$("a", self._list).removeClass("active");
				$(this).addClass("active");
			});
		}
		this._colLeft.append(this._list);
	},
	
	getDom : function() {
		this._wrapper = $("<div class='row'>");
		this._colLeft = $("<div class='col-md-8'>");
		var colRight = $("<div class='col-md-4 list-button-wrapper'>");
		this._wrapper.append(this._colLeft);
		this._wrapper.append(colRight);
		
		this._buildList();
		
		var addBtn = $("<button class='btn btn-primary'>New</button>");
		var delBtn = $("<button class='btn btn-danger'>Delete</button>");
		

		colRight.append(addBtn);
		colRight.append(delBtn);
		
		addBtn.click($.proxy(function(){
			var itemType = window[this._itemType.getTypeName()];
			var item = new itemType();
			var listItemView = this._itemType.getListItemView(item, this._form);
			this._items.push(listItemView);
			var dom = listItemView.getDom()
			dom.click(function(){
				$("a", self._list).removeClass("active");
				$(this).addClass("active");
			});
			this._list.append(dom);
		}, this));
		
		delBtn.click($.proxy(function(){
			var selected = $(this._list, "a.active");
			var selectedIndex = $(this._list, "a").index(selected);
			this._items.splice(selectedIndex,1);
			this._buildList();
		},this))
		return this._wrapper;
		
	},
	
	
})