const Router = require('express').Router;
const Crime = require(__dirname + '/../../model/crime');
const eH = require(__dirname + '/../lib/error_handler');
const request = require('superagent');
var dailyRouter = module.exports = exports = Router();

var yesterday = {
 date: new Date(Date.now() - 8.64e+7),
 day: (new Date(Date.now() - 8.64e+7)).getDate(),
 month: (new Date(Date.now() - 8.64e+7)).getMonth() + 1,
 year: (new Date(Date.now() - 8.64e+7)).getFullYear()
};

var dayBefore = {
 date: new Date(Date.now() - 1.728e+8),
 day: (new Date(Date.now() - 1.728e+8)).getDate(),
 month: (new Date(Date.now() - 1.73e+8)).getMonth() + 1,
 year: (new Date(Date.now() - 1.73e+8)).getFullYear()
};

var dailyData = function() {
  request.get('https://data.seattle.gov/resource/tn4m-tpqu.json?month=' + '5' + '&year=' + '2016')
    .end((err, res) => {
      if (err) {
        return eH(err);
      }
      dailyUpdateArray = [];
      for (var i = 0; i < res.body.length; i++) {
        var newCrime = new Crime({
          offense: res.body[i].offense_type,
          date: res.body[i].occurred_date_or_date_range_start.slice(0, 10),
          day: res.body[i].occurred_date_or_date_range_start.slice(8, 10),
          month: res.body[i].month,
          year: res.body[i].year,
          time: res.body[i].occurred_date_or_date_range_start.slice(11),
          longitude: res.body[i].longitude,
          latitude: res.body[i].latitude,
          zone: res.body[i].zone_beat,
          rms_cdw_id: res.body[i].rms_cdw_id
        });
        dailyUpdateArray.push(newCrime);
      }
      console.log(dailyUpdateArray);
      console.log('all data written to DB with ' + res.body.length + ' documents');
      console.log(dailyUpdateArray[0].rms_cdw_id);
    });
};
setInterval(() => {
dailyRouter.get('/daily', (req, res) => {
  dailyData();
  return res.status(200).send('Today\'s data is in the array');
  console.log("getting data");
});
}, 4000);
