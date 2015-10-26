var React = require('react');
var NewsFeedStore = require('../stores/newsFeedStore');
var NewsFeedCreator = require('./newsFeedCreator');
var NewsFeedList = require('./newsFeedList');

// Method to retrieve state from Stores
function getNewsFeedState() {
  return {
    news: NewsFeedStore.getNews(),
  };
}

var newsFeed = React.createClass({
  // Get initial state from stores
  getInitialState: function() {
    return getNewsFeedState();
  },
  // Add change listeners to stores
  componentDidMount: function() {
    NewsFeedStore.addChangeListener(this._onChange);
  },
  // Remove change listers from stores
  componentWillUnmount: function() {
    NewsFeedStore.removeChangeListener(this._onChange);
  },
  // Render our child components, passing state via props
  render: function() {
    return (
      <div className="newsfeed">
          <NewsFeedCreator />
          <NewsFeedList items={this.state.news} />
      </div>
    );
  },
  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getNewsFeedState());
  }
});

module.exports = newsFeed;
