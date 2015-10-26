var React = require('react');
var ProfilStatsStore = require('../stores/profilStatsStore');
// var NewsFeedCreator = require('./newsFeedCreator');
// var LastActivitiesList = require('./lastActivitiesList');

// Method to retrieve state from Stores
function getProfilStatsState() {
  return {
    profilStats: ProfilStatsStore.getProfilStats(),
  };
}

var profilStats = React.createClass({
  // Get initial state from stores
  getInitialState: function() {
    return getProfilStatsState();
  },
  // Add change listeners to stores
  componentDidMount: function() {
    ProfilStatsStore.addChangeListener(this._onChange);
  },
  // Remove change listers from stores
  componentWillUnmount: function() {
    ProfilStatsStore.removeChangeListener(this._onChange);
  },
  // Render our child components, passing state via props
  render: function() {
    var Stats = this.state.profilStats;
    return (
      <div className="profil-info-stats">
          <div className="profil-info-stats-content">
            <strong>{Stats.followers}</strong>
            <span>FOLLOWERS</span>
          </div>
          <div className="profil-info-stats-content">
              <strong>{Stats.posts}</strong>
              <span>POSTS</span>
          </div>
          <div className="profil-info-stats-content">
            <strong>{Stats.following}</strong>
            <span>FOLLOWING</span>
          </div>
      </div>
    );
  },
  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getProfilStatsState());
  }
});

module.exports = profilStats;
