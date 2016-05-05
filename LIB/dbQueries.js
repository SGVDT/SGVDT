require('mongoose');
const Offense = require(__dirname + '/../model/offense');
const errorHandler = require(__dirname + '/error_handler');

// by location
// by year
// by incident type

var query = {
  byYear: function(requestedYear, callback) {
    Offense.find({ year: requestedYear }, (err, data) => {
      if (err) return errorHandler(err);
      callback(data);
      return data;
    });
  },

  byMonth: function(requestedMonth, requestedYear) {
    if (typeof requestedYear === 'undefined') {
      requestedYear = (new Date(Date.now())).getFullYear();
    }
    Offense.find({ year: requestedYear, month: requestedMonth }, (err, data) => {
      if (err) return errorHandler(err);
      return data;
    });
  },

  byOffenseType: function(type, requestedMonth, requestedYear) {
    if (typeof requestedMonth === 'undefined') {
      requestedMonth = (new Date(Date.now())).getMonth();
    }
    if (typeof requestedYear === 'undefined') {
      requestedYear = (new Date(Date.now())).getFullYear();
    }
    Offense.find({ offense: type, month: requestedMonth, year: requestedYear }, (err, data) => {
      if (err) return errorHandler(err);
      return data;
    });
  }
};

function byMonth(requestedMonth, requestedYear, callBack) {
  if (typeof requestedYear === 'undefined') {
    requestedYear = (new Date(Date.now())).getFullYear();
  }
  Offense.find({ year: requestedYear, month: requestedMonth }, (err, data) => {
    if (err) return errorHandler(err);
    return data;
  });
}
query.byYear(2016, (data) => {
  console.log('byYear array function ' + data);
});
