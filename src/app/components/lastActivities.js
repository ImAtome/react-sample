var React = require('react');
var LastActivitiesStore = require('../stores/lastActivitiesStore');
// var NewsFeedCreator = require('./newsFeedCreator');
var LastActivitiesList = require('./lastActivitiesList');

// Method to retrieve state from Stores
function getLastActivitiesState() {
  return {
    activities: LastActivitiesStore.getActivities(),
  };
}

var lastActivities = React.createClass({
  // Get initial state from stores
  getInitialState: function() {
    return getLastActivitiesState();
  },
  // Add change listeners to stores
  componentDidMount: function() {
    LastActivitiesStore.addChangeListener(this._onChange);
  },
  // Remove change listers from stores
  componentWillUnmount: function() {
    LastActivitiesStore.removeChangeListener(this._onChange);
  },
  // Render our child components, passing state via props
  render: function() {
    return (
      // <div className="newsfeed">
      //     <NewsFeedCreator />
      //     <NewsFeedList items={this.state.news} />
      // </div>
      <div className="profil-historique">
          <LastActivitiesList items={this.state.activities} />
      </div>
    );
  },
  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getLastActivitiesState());
  }
});

module.exports = lastActivities;
