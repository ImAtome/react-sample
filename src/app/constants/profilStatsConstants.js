var keyMirror = require('react/lib/keyMirror');

// Define action constants
var profilStatsConstants = keyMirror({
  LOAD_PROFILSTATS: null,
  INC_POSTS: null,
  INC_FOLLOWERS: null,
  INC_FOLLOWING: null,
  DEC_POSTS: null,
  DEC_FOLLOWERS: null,
  DEC_FOLLOWING: null
});

module.exports = profilStatsConstants;
