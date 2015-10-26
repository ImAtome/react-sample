var React = require('react');
var LastActivitiesItem = require('./lastActivitiesItem')

var lastActivitiesList = React.createClass({
  render: function() {
    var Items = this.props.items;
    return (
      <div className="historique-list">
      {Items.map(function(item, idx){
              return (
                <LastActivitiesItem item={item} index={idx} />
              )
      })}
      </div>
    );
  }
});

module.exports = lastActivitiesList;
