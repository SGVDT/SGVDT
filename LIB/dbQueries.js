const mongoose = require('mongoose');
const Crime = require(__dirname + '/../model/crime');
const errorHandler = require(__dirname + '/error_handler');

var yesterday = {
 date: new Date(Date.now() - 8.64e+7),
 day: (new Date(Date.now() - 8.64e+7)).getDate(),
 month: (new Date(Date.now() - 8.64e+7)).getMonth() + 1,
 year: (new Date(Date.now() - 8.64e+7)).getFullYear()
};

var dayBefore = {
 date: new Date(Date.now() - 1.73e+8),
 day: (new Date(Date.now() - 1.73e+8)).getDate(),
 month: (new Date(Date.now() - 1.73e+8)).getMonth() + 1,
 year: (new Date(Date.now() - 1.73e+8)).getFullYear()
};

// by location
// by year
// by incident type
var query = {
  byYear: function(requestedYear) {
    Crime.find({ year: requestedYear }, (err, data) => {
      if (err) return errorHandler(err);
      return data;
    });
  },

  byMonth: function(requestedMonth, requestedYear) {
    if (typeof requestedYear === 'undefined') {
      requestedYear = (new Date(Date.now())).getFullYear();
    }
    Crime.find({ year: requestedYear, month: requestedMonth }, (err, data) => {
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
    Crime.find({ offense: type, month: requestedMonth, year: requestedYear }, (err, data) => {
      if (err) return errorHandler(err);
      return data;
    });
  }
};

function byMonth(requestedMonth, requestedYear, callBack) {
  if (typeof requestedYear === 'undefined') {
    requestedYear = (new Date(Date.now())).getFullYear();
  }
  Crime.find({ year: requestedYear, month: requestedMonth }, (err, data) => {
    if (err) return errorHandler(err);
    return data;
  });
}

byMonth(5, 2016, (data) => {
  console.log('test' + data);
});

// var updateArray.map( (collection) => {
//     return collection.find({ continent: region }).exec();
//   });
//   Promise.all(promiseArray).then( (resultsArray) => {
//     friends = resultsArray.reduce( (previous, current) => {
//       return previous.concat(current);
//     }, []);
//     var text = displayFriends(region, friends);
//     res.status(200).send(text);
//   });
// });
