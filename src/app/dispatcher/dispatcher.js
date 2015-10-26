var fluxDispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var dispatcher = new fluxDispatcher();

// Convenience method to handle dispatch requests
dispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = dispatcher;
