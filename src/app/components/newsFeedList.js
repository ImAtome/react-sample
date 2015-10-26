var React = require('react');
var newsFeedActions = require('../actions/newsFeedActions');
var NewsFeedItem = require('./newsFeedItem')

var newsFeedList = React.createClass({
  render: function() {
    var Items = this.props.items;
    return (
      <div className="news-list">
      {Items.map(function(item, idx){
              return (
                <NewsFeedItem item={item} index={idx} />
              )
      })}
      </div>
    );
  }
});

module.exports = newsFeedList;
