var dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var lastActivitiesConstants = require('../constants/lastActivitiesConstants');
var _ = require('underscore');

// Define initial data points
var _activities = [];

function loadActivities(data) {
  if (data !== null)
    _activities = data;
  else
    console.log('DATA == NULL');
}

function addActivity(data) {
  _activities.unshift(data);
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var lastActivitiesStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getActivities: function() {
    return _activities;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with dispatcher
dispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    case lastActivitiesConstants.LOAD_ACTIVITIES:
      loadActivities(action.activities);
      break;

    case lastActivitiesConstants.ADD_ACTIVITY:
      addActivity(action.activity);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  lastActivitiesStore.emitChange();

  return true;

});

module.exports = lastActivitiesStore;
