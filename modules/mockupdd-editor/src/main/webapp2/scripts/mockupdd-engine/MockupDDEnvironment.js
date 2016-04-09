var MockupDDEnvironment = {}
MockupDDEnvironment._tagsByType = {};

MockupDDEnvironment.registerTag = function(tagClass, tagType) {
	tagClass.getTagType = function() { return tagType; };
	MockupDDEnvironment._tagsByType[tagType] = tagClass;
};

MockupDDEnvironment.getTagByType = function(tagType) {
	return MockupDDEnvironment._tagsByType[tagType];
}