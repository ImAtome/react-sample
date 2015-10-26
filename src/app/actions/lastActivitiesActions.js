var dispatcher = require('../dispatcher/dispatcher');
var lastActivitiesConstants = require('../constants/lastActivitiesConstants');

// Define actions object
var lastActivitiesActions = {
  loadActivities: function(data) {    /* Get news BDD */
    dispatcher.handleAction({
      actionType: lastActivitiesConstants.LOAD_ACTIVITIES,
      activities: data
    })
  },
  addActivity: function(data) {
    dispatcher.handleAction({
      actionType: lastActivitiesConstants.ADD_ACTIVITY,
      activity: data
    })
  }
};

module.exports = lastActivitiesActions;
