var React = require('react');
var newsFeedActions = require('../actions/newsFeedActions');
var lastActivitiesActions = require('../actions/lastActivitiesActions');
var profilStatsActions = require('../actions/profilStatsActions');

var newsFeedCreator = React.createClass({
  addNews: function() {
    var news = {};
    news.date = new Date();
    news.text = $("#news-creator-area").val();
    news.isLiked = false;
    news.isHidden = false;
    newsFeedActions.addNews(news);
    var activity = {};
    activity.date = news.date;
    activity.type = 'Created';
    lastActivitiesActions.addActivity(activity);
    profilStatsActions.incPosts();
    $("#news-creator-area").val('');
  },
  render: function() {
    return (
      <div className="news-creator">
          <textarea id="news-creator-area" placeholder="What's on your mind?" role="textbox" autoComplete="off" ></textarea>
          <div className="news-creator-button" onClick={this.addNews}>
               POST
          </div>
      </div>
    );
  }
});

module.exports = newsFeedCreator;
