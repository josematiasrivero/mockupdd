/**
 * A form that generates a default edition view based on metadata.
 */
var ReflectionForm = Form.extend({
	
	/**
	 * Contructor 
	 * @param model The object to be edited.
	 * @param title Form title.
	 * @param fieldFilterFunction A function for filtering field. Receives field name and should return true
	 * 	 		if the field is to be shown and false otherwise. Default show all.
	 */
	init: function(model, title, fieldFilterFunction){
		this._super(model, title);
		this._fieldFilterFunction = fieldFilterFunction || function(){return true}; 
		this._views = {};

		for(var prop in this._model.getMetadata()){
			var metadata = this._model.getMetadata()[prop];
			if(this._fieldFilterFunction(metadata) && metadata.editable){
				this._views[prop] = metadata.type.getTypeView(this._model.getProperty(prop),this);
			}
		}
	},
	
	getDom : function(){
		this._tabs= {};
		this._tabsDom = {};
		this._tabSelectors = {}
		this._tabSelectorList = $('<ul class="nav nav-tabs" role="tablist">');
		this._tabList = $('<div class="tab-content form-tab">');
		var wrapper = $("<div>")
		wrapper.append(this._tabSelectorList);
		wrapper.append(this._tabList);
		for(prop in this._views){
			var category = this._model.getMetadata()[prop].category;
			var label = this._model.getMetadata()[prop].label;
			var tab = this._getTab(category);
			tab.append(this._createField(label, this._views[prop]));
		}
		return wrapper;
	},

	save: function(){
		for(var prop in this._views){
			if(this._views[prop].isDirty()){
				this._model.setProperty(prop, this._views[prop].getValue());
			}
		}
	},

	_getTab : function(category){
		if(category in this._tabs){
			return this._tabs[category];
		}

		var tabSelector = $('<li role="presentation"><a href="#formtab-'+category+'" role="tab" data-toggle="tab">'+category.charAt(0).toUpperCase() + category.slice(1)+'</a></li>')
		var tab = $('<div role="tabpanel" class="tab-pane" id="formtab-'+category+'"></div>')
		this._tabSelectorList.append(tabSelector);
		this._tabList.append(tab);
		if(Object.keys(this._tabs).length == 0 ){
			tabSelector.addClass("active");
			tab.addClass("active");
		}
		this._tabs[category] = tab;
		return tab;
	},
	
	_createField: function(label, view){
		var formGroup = $("<div class='form-group'/>");
		var label=$("<label class='control-label col-xs-3'>"+label+"</label>");
		var control= $("<div class='col-xs-9'/>").append(view.getDom());
		formGroup.append(label);
		formGroup.append(control);
		return formGroup;
	},
	
})