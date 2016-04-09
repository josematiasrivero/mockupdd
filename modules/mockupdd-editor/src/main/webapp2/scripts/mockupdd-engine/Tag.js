var Tag = Class.extend({

  init : function(engine, selector, parameters, joinPoints) {
    this.setEngine(engine);
    this.selector = selector;
    this.element = $(selector)[0];
    this.subtags = [];
    this.tagClassId = engine.createTagClassId();
    this.registerTag(this.element);
    this.checkParameters(parameters);
    this.joinPoints = {};
    this.tagRan = false;
    this.mockupddModel = null;
  },

  checkParameters : function(parameters) {
    var requiredParameters = this.getRequiredParameters();
    for (i in requiredParameters) {
      if (!parameters[requiredParameters[i]]) {
        throw "Parameter not supplied: " + requiredParameters[i];
      }
    }
    this.parameters = parameters;
  },

  findParentTag : function() {
    var parent = $(this.element).parent();
    while (parent.length > 0 && !parent.data('_mockupdd_tag')) {
      // console.log(parent);
      parent = parent.parent();
    }
    ;
    if (parent.data('_mockupdd_tag')) {
      parent.data('_mockupdd_tag').tag.addSubtag(this);
      this.setParentTag(parent.data('_mockupdd_tag').tag);
    }
  },

  addSubtag : function(tag) {
    this.subtags.push(tag);
  },

  getSubtags : function() {
    return this.subtags.concat();
  },

  getSubtagsOfType : function(tagType) {
    return _.filter(this.getSubtags(), function(tag) {
      return tag.getTagType() == tagType;
    });
  },

  setParentTag : function(parentTag) {
    this.parentTag = parentTag;
  },

  getParentTag : function() {
    return this.parentTag;
  },

  setMockupDDModel : function(mockupddModel) {
    this.mockupddModel = mockupddModel;
  },

  getMockupDDModel : function() {
    return this.mockupddModel;
  },

  removeFromMockupDDModel : function() {
    if (this.getMockupDDModel() != null) {
      this.getMockupDDModel().removeTag(this);
    }
  },

  getParameters : function() {
    return this.parameters;
  },

  getSelector : function() {
    return this.selector;
  },

  getElement : function() {
    return this.element;
  },

  getTagClassId : function() {
    return this.tagClassId;
  },

  registerTag : function() {
    $(this.element).data('_mockupdd_tag', {
      tag : this,
      type : this.getTagType()
    });
    $(this.element).addClass(this.getTagClassId());
  },

  prepareToRun : function() {
    this.findParentTag();
  },

  runTag : function(context) {
    if (!this.tagRan) {
      this.run(context);
      this.tagRan = true;
    }
  },

  cloneTag : function(newElement) {
    var clonedTag = this.clone(newElement);
    clonedTag.tagRan = false;
    return clonedTag;
  },

  getRequiredParameters : function() {
    throw 'mustBeImplemented';
  },

  run : function(context) {
    throw 'mustBeImplemented';
  },

  canRunStandalone : function() {
    return !this.getParentTag();
  },

  getEngine : function() {
    return this.engine;
  },

  setEngine : function(engine) {
    this.engine = engine;
    engine.addTag(this);
  },

  getTagType : function() {
    throw 'mustBeImplemented';
  },

  clone : function(newElement) {
    throw 'mustBeImplemented';
  },

  registerJoinPoint : function(name, defaultBehaviour) {
    this.joinPoints[name] = defaultBehaviour;
  },

  on : function(joinPointName, f) {
    if (!this.joinPoints[joinPointName]) {
      throw ("JoinPoint " + joinPointName + " does not exist");
    }
    this.joinPoints[joinPointName] = f;
  },

  runJoinPoint : function(name, args) {
    return this.joinPoints[name].apply(this, args);
  },

  addJoinPoints : function(joinPoints) {
    for (joinPointName in joinPoints) {
      this.on(joinPointName, joinPoints[joinPointName]);
    }
  },

  getJoinPoints : function() {
    joinPointsCopy = {};
    for (joinPointName in this.joinPoints) {
      joinPointsCopy[joinPointName] = this.joinPoints[joinPointName];
    }
    return joinPointsCopy;
  },

  copyJoinPointsTo : function(tag) {
    tag.addJoinPoints(this.getJoinPoints());
    return tag;
  }

});