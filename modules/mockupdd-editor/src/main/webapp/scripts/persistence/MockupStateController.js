/// Preconditions: Preconditions.js

var MockupState = {
  SAVED: 'Saved',
  SAVING: 'Saving',
  DIRTY: 'Dirty'
};

var MockupStateController = {
  update: function(state) {
    Preconditions.checkType(state, 'string', 'mockup state');
    if (!MockupState.hasOwnProperty(state)) throw 'state "' + state + '" invalid.';
    $('#mockupState').text(MockupState[state]);
  }
}
