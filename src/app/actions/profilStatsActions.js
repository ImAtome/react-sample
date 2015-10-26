var dispatcher = require('../dispatcher/dispatcher');
var ProfilStatsConstants = require('../constants/profilStatsConstants');

// Define actions object
var profilStatsActions = {
  loadProfilStats: function(data) {    /* Get news BDD */
    dispatcher.handleAction({
      actionType: lProfilStatsConstants.LOAD_PROFILSTATS,
      profilStats: data
    })
  },
  incFollowers: function() {
    dispatcher.handleAction({
      actionType: ProfilStatsConstants.INC_FOLLOWERS
    })
  },
  incPosts: function() {
    dispatcher.handleAction({
      actionType: ProfilStatsConstants.INC_POSTS
    })
  },
  incFollowing: function() {
    dispatcher.handleAction({
      actionType: ProfilStatsConstants.INC_FOLLOWING
    })
  },
  decFollowers: function() {
    dispatcher.handleAction({
      actionType: ProfilStatsConstants.DEC_FOLLOWERS
    })
  },
  decPosts: function() {
    dispatcher.handleAction({
      actionType: ProfilStatsConstants.DEC_POSTS
    })
  },
  decFollowing: function() {
    dispatcher.handleAction({
      actionType: ProfilStatsConstants.DEC_FOLLOWING
    })
  },
};

module.exports = profilStatsActions;
