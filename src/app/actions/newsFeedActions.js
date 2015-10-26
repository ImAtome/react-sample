var dispatcher = require('../dispatcher/dispatcher');
var newsFeedConstants = require('../constants/newsFeedConstants');

// Define actions object
var newsFeedActions = {
  loadNews: function(data) {    /* Get news BDD */
    dispatcher.handleAction({
      actionType: newsFeedConstants.LOAD_NEWS,
      news: data
    })
  },
  addNews: function(data) {
    dispatcher.handleAction({
      actionType: newsFeedConstants.ADD_NEWS,
      news: data
    })
  },
  deleteNews: function(idx) {
    dispatcher.handleAction({
      actionType: newsFeedConstants.DELETE_NEWS,
      index: idx
    })
  },
  hideNews: function(idx) {
    dispatcher.handleAction({
      actionType: newsFeedConstants.HIDE_NEWS,
      index: idx
    })
  },
  showNews: function(idx) {
    dispatcher.handleAction({
      actionType: newsFeedConstants.SHOW_NEWS,
      index: idx
    })
  },
  modifyNews: function(idx, data) {
    dispatcher.handleAction({
      actionType: newsFeedConstants.MODIFY_NEWS,
      news: data,
      index: idx
    })
  }
};

module.exports = newsFeedActions;
