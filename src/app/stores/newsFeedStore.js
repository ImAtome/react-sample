var dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var newsFeedConstants = require('../constants/newsFeedConstants');
var _ = require('underscore');

// Define initial data points
var _news = [];

function loadNews(data) {
  if (data !== null)
    _news = data;
  else
    console.log('DATA == NULL');
}

function addNews(data) {
  _news.unshift(data);
}

function deleteNews(idx) {
  _news.splice(idx, 1);
}

function hideNews(idx) {
  _news[idx].isHidden = true;
}

function showNews(idx) {
  _news[idx].isHidden = false;
}

function modifyNews(idx, data) {
  _news[idx] = data;
}




// Extend ProductStore with EventEmitter to add eventing capabilities
var newsFeedStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getNews: function() {
    return _news;
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

    case newsFeedConstants.LOAD_NEWS:
      loadNews(action.news);
      break;

    case newsFeedConstants.ADD_NEWS:
      addNews(action.news);
      break;

    case newsFeedConstants.DELETE_NEWS:
      deleteNews(action.index);
      break;

    case newsFeedConstants.HIDE_NEWS:
      hideNews(action.index);
      break;

    case newsFeedConstants.SHOW_NEWS:
      showNews(action.index);
      break;

      case newsFeedConstants.MODIFY_NEWS:
        modifyNews(action.news, action.index);
        break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  newsFeedStore.emitChange();

  return true;

});

module.exports = newsFeedStore;
