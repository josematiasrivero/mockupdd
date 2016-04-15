/// Preconditions: Preconditions.js

var MockupState = {
  SAVED: 'Saved',
  SAVING: 'Saving',
  DIRTY: 'Dirty',
  LOADING: 'Loading'
};

var MockupStateController = function () {
  return {
    update: function (state) {
      Preconditions.checkType(state, 'string', 'mockup state');
      if (!MockupState.hasOwnProperty(state)) throw 'state "' + state + '" invalid.';
      $('#mockupState').text(MockupState[state]);
    },
    currentState: function () {
      return $('#mockupState').text();
    },
    isState: function (state) {
      return this.currentState() === MockupState[state];
    }
  }
}();
