var DataTag = Tag.extend({

	init: function(engine, selector, parameters) {
		this._super(engine, selector, parameters);
		this.registerJoinPoint('get', function(value) { return value});
		this.registerJoinPoint('set', function(value) { return value});
	},
	
	getRequiredParameters: function() {
		return ['class'];
	},
	
	run: function(context) {
		var self = this;
		if (this.getParameters().isList) {
			$(this.getElement()).hide();
		}
		if (this.getParameters().mode == 'createsOrUpdates' || !this.getParameters().mode) {
			this.dataBind(context);
			var params = this.getParameters();
			if (!params.property && params.isList) {
				this.getEngine().getDataManager().addObjectListener(params["class"], function() { self.bindAllObjects(); });
			} 
		}
	},
	
	canRunStandalone: function() {
		return !this.getParameters().property;
	},
	
	dataBind: function(context) {
		var params = this.getParameters();
		var self = this;
		if (params.property) {
			this.bindProperty(context);
		} else if (!params.sourceTag && !params.property && !params.isList) {
			// buscar objeto en el page context
			this.bindSingleObject();
			this.getEngine().getDataManager().addObjectListener(params["class"], function() { self.bindSingleObject(); });
		} else if (!params.sourceTag && !params.property && params.isList) {
			this.bindAllObjects();
			this.getEngine().getDataManager().addObjectListener(params["class"], function() { self.bindAllObjects(); });
		}
	},
	
	bindProperty: function(context) {
		if (this.getParameters().mode == 'creates') {
			throw 'Data tag: cannot bind property with a parent tag in "creates" mode';
		}
		if ($(this.getElement()).is('input')) {
			$(this.getElement()).val(this.runJoinPoint('get', [context.object[this.getParameters().property]]));
		} else {
			$(this.getElement()).html(this.runJoinPoint('get', [context.object[this.getParameters().property]]));
		}
	},
	
	getObjects: function(callback) {
		var params = this.getParameters();
		if (params.dataPath) {
			var object = (params.sourceTag ? params.sourceTag : this.getParentTag()).getData()[params.dataPath];
			if (!object) {
				return [];
			}
			callback(object instanceof Array ? object : [object]);		
		} else {
			this.getEngine().getDataManager().getAll(this.getParameters()["class"], function(objects) {
				callback(objects);
			});
		}
		
	},
	
	bindSingleObject: function() {
		var self = this;
		var context = this.getEngine().getPageContextManager().getPageContextForCurrentPage(function(context) {
			if (!context) {
				self.bindFirstObject();
			} else {
				var object = context.objects[self.getParameters()["class"]];
				if (object) {
					self.bindObject(object)
				} else {
					self.bindFirstObject();
				}
			}
		});
			
	},
	
	bindFirstObject: function() {
		var self = this;
		this.getObjects(function(objects) {
			var object = null;
			for (id in objects) {
				object = objects[id];
				break;
			}
			self.bindObject(object);			
		});
	},
	
	bindObject: function(object) {
		this._setData(object);
		$.each(this.getSubtags(), function(i, subtag) {
			subtag.runTag({object: object});
		});
	},
	
	bindAllObjects: function() {
		var self = this;
		$(this.getElement()).parent().find("." + this.getTagClassId() + "_element").remove();
		this.getObjects(function(objects) {
			self._setData(objects);
			var objectsByDescId = _.sortBy(_.toArray(objects), function(object) {return object._id}).reverse();
			_.each(objectsByDescId, function(object) {
				var newElement = $(self.element).clone();
				newElement.addClass(self.getTagClassId() + "_element");
				$(self.getElement()).after(newElement);
				_.each(self.getSubtags(), function(subtag) {
					var newSubtag = subtag.cloneTag(newElement.find("." + subtag.getTagClassId()));
					newSubtag.setParentTag(self);
					newSubtag.runTag({object: object});
				});
				newElement.show(500);
			});
		});
	},
	
	createObject: function() {
		var object = {};
		$.each(this.getSubtagsOfType(this.getTagType()), function(i, subtag) {
			subtag.setValueToObject(object);
		});
		return object;
	},
	
	cleanFields: function() {
		_.each(this.getSubtagsOfType(this.getTagType()), function(tag) {
			tag.cleanField();
		});
	},
	
	cleanField: function() {
		if ($(this.getElement()).is('input')) {
			$(this.getElement()).val("");
		}
	},
	
	setValueToObject: function(object) {
		object[this.getParameters().property] = this.runJoinPoint('set', [$(this.element).val()]);
	},
	
	getTagType: function() {
		return 'Data::Data';
	},
	
	rebind: function() {
		this.runTag();
	},
	
	_setData: function(data) {
		this.data = data;
	},
	
	getData: function() {
		return this.data;
	},
	
	clone: function(newElement) {
		return this.copyJoinPointsTo(new DataTag(this.getEngine(), newElement, this.getParameters()));
	}

});
MockupDDEnvironment.registerTag(DataTag, 'Data::Data');