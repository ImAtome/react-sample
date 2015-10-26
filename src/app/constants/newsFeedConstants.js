var keyMirror = require('react/lib/keyMirror');

// Define action constants
var newsFeedConstants = keyMirror({
  LOAD_NEWS: null,
  ADD_NEWS: null,
  DELETE_NEWS: null,
  HIDE_NEWS: null,
  SHOW_NEWS: null,
  MODIFY_NEWS: null
});

module.exports = newsFeedConstants;
