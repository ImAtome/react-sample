module.exports = {
  timeElapsed: function(date) {
    var today = new Date();
    var msg;
    if (today.getFullYear() > date.getFullYear()) {
      var yearElapsedVal = parseInt(today.getFullYear()) - parseInt(date.getFullYear());
      var yearElapsed = (yearElapsedVal > 1) ? " years" : " year";
      msg = String(yearElapsedVal) + String(yearElapsed) + " ago.";
    }
    else if (today.getMonth() > date.getMonth()) {
      var monthElapsedVal = parseInt(today.getMonth()) - parseInt(date.getMonth());
      var monthElapsed = (monthElapsedVal > 1) ? " months" : " month";
      msg = String(monthElapsedVal) + String(monthElapsed) + " ago.";
    }
    else if (today.getDate() > date.getDate()) {
      var dayElapsedVal = parseInt(today.getDate()) - parseInt(date.getDate());
      var dayElapsed = (monthElapsedVal > 1) ? " days" : " day";
      msg = String(dayElapsedVal) + String(dayElapsed) + " ago.";
    }
    else if (today.getHours() > date.getHours()) {
      var hourElapsedVal = parseInt(today.getHours()) - parseInt(date.getHours());
      var hourElapsed = (hourElapsedVal > 1) ? " hours" : " hour";
      msg = String(hourElapsedVal) + String(hourElapsed) + " ago.";
    }
    else if (today.getMinutes() > date.getMinutes()) {
      var minuteElapsedVal = parseInt(today.getMinutes()) - parseInt(date.getMinutes());
      var minuteElapsed = (minuteElapsedVal > 1) ? " minutes" : " minute";
      msg = String(minuteElapsedVal) + String(minuteElapsed) + " ago.";
    }
    else if (today.getSeconds() >= date.getSeconds())
      msg = "Few seconds ago.";
    else
      msg = "Error date time.";
    return msg;
  }
};
