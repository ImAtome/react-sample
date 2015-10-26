var React = require('react');
var LastActivitiesActions = require('../actions/lastActivitiesActions');
var TimeElapsed = require('../utils/elapsedTime.js');

var lastActivitiesItem = React.createClass({
  getInitialState: function() {
      var idx = this.props.index;
      return {index: idx};
  },

  render: function() {
    var Item = this.props.item;
    var Dates = TimeElapsed.timeElapsed(Item.date);
    var Type = Item.type;
    var Icon = "";
    var Text = "";
    if (Type == 'Liked') {
      Icon = "fa fa-heart";
      Text = "Sandra Model's post";
    }
    else if (Type == 'Created') {
      Icon = "fa fa-plus";
      Text = "a new post";
    }
    else if (Type == 'Commented') {
      Icon = "fa fa-comment";
      Text = "Sandra Model's post";
    }
    else if (Type == 'Followed') {
      Icon = "fa fa-child";
      Text = "Sandra Model";
    }
    return (
          <div className="historique">
            <span className="historique-content-type"><i className={Icon}></i>&nbsp;&nbsp;{Type}</span> &nbsp;<span className="historique-content-title">{Text}</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="historique-time">{Dates}</span>
          </div>
    );
  }
});

module.exports = lastActivitiesItem;
