var React = require('react');
var NewsFeedActions = require('../actions/newsFeedActions');
var LastActivitiesActions = require('../actions/lastActivitiesActions');
var ProfilStatsActions = require('../actions/profilStatsActions');
var TimeElapsed = require('../utils/elapsedTime.js');

var newsFeedItem = React.createClass({
  getInitialState: function() {
      var idx = this.props.index;
      return {index: idx};
  },
  likeNews: function() {
    var news = this.props.item;
    news.isLiked = news.isLiked ? false : true;
    NewsFeedActions.modifyNews(this.props.index, news);
    var activity = {};
    activity.date = news.date;
    activity.type = 'Liked';
    LastActivitiesActions.addActivity(activity);
  },
  hideNews: function() {
    var news = this.props.item;
    news.isHidden = news.isHidden ? false : true;
    NewsFeedActions.modifyNews(this.props.index, news);
  },
  deleteNews: function() {
    NewsFeedActions.deleteNews(this.props.index);
    ProfilStatsActions.decPosts();
  },
  render: function() {
    var Item = this.props.item;
    var Dates = TimeElapsed.timeElapsed(Item.date);
    var Hidden = Item.isHidden ? "fa fa-eye-slash" : "fa fa-eye";
    var Liked = Item.isLiked ? "news-item-actions-item red" : "news-item-actions-item";
    return (
          <div className="news-item">
              <div className="news-item-profile">
                  <div className="news-item-picture"></div>
                  <div className="news-item-infos">
                    <a href="#">Sandra Model</a><br/>
                    <span>{Dates}</span>
                  </div>
                  <div className="news-item-settings">
                      <i className={Hidden} onClick={this.hideNews}></i>&nbsp;&nbsp;&nbsp;<i className="fa fa-times" onClick={this.deleteNews}></i>
                  </div>
              </div>
              <div className="news-item-content">
                <p>
                  {Item.text}
                </p>
              </div>
              <div className="news-item-actions">
                  <div className="news-item-actions-item">
                      <i className="fa fa-share"></i>&nbsp;Share
                  </div>
                  <div className="news-item-actions-item">
                      <i className="fa fa-comment"></i>&nbsp;Comment
                  </div>
                  <div className={Liked} onClick={this.likeNews}>
                      <i className="fa fa-heart"></i>&nbsp;Like
                  </div>
              </div>
          </div>
    );
  }
});

module.exports = newsFeedItem;
