var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var ProfilStatsConstants = require('../constants/profilStatsConstants');
var _ = require('underscore');

// Define initial data points
var _profilStats = {
  followers: 0,
  posts: 0,
  following: 0
};

function loadProfilStats(data) {
  if (data !== null)
    _profilStats = data;
  else
    console.log('DATA == NULL');
}

function incFollowers() {
  _profilStats.followers += 1;
}

function incPosts() {
  _profilStats.posts += 1;
}

function incFollowing() {
  _profilStats.following += 1;
}

function decFollowers() {
  _profilStats.followers -= 1;
}

function decPosts() {
  _profilStats.posts -= 1;
}

function decFollowing() {
  _profilStats.following -= 1;
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var profilStatsStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getProfilStats: function() {
    return _profilStats;
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
Dispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    case ProfilStatsConstants.LOAD_PROFILSTATS:
      loadProfilStats(action.profilStats);
      break;

    case ProfilStatsConstants.INC_FOLLOWERS:
      incFollowers();
      break;

    case ProfilStatsConstants.INC_POSTS:
      incPosts();
      break;

    case ProfilStatsConstants.INC_FOLLOWING:
      incFollowing();
      break;

    case ProfilStatsConstants.DEC_FOLLOWERS:
      decFollowers();
      break;

    case ProfilStatsConstants.DEC_POSTS:
      decPosts();
      break;

    case ProfilStatsConstants.DEC_FOLLOWING:
      decFollowing();
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  profilStatsStore.emitChange();

  return true;

});

module.exports = profilStatsStore;
