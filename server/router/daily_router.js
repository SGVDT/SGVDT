const Router = require('express').Router;
const Crime = require(__dirname + '/../../model/crime');
const eH = require(__dirname + '/../lib/error_handler');
const request = require('superagent');
var dailyRouter = module.exports = exports = Router();
var count = 0;


var dailyData = function() {
  request.get('https://data.seattle.gov/resource/tn4m-tpqu.json?year=2015&month=1')
    .end((err, res) => {
      if (err) return eH(err);

      console.log('body length ' + res.body.length);

      for (var i = 0; i < res.body.length; i++) {
        // var newCrime = new Crime({
        //   offense: res.body[i].offense_type,
        //   date: res.body[i].occurred_date_or_date_range_start.slice(0, 10),
        //   day: res.body[i].occurred_date_or_date_range_start.slice(8, 10),
        //   month: res.body[i].month,
        //   year: res.body[i].year,
        //   time: res.body[i].occurred_date_or_date_range_start.slice(11),
        //   longitude: res.body[i].longitude,
        //   latitude: res.body[i].latitude,
        //   zone: res.body[i].zone_beat,
        //   rms_cdw_id: res.body[i].rms_cdw_id
        // });
// console.log(newCrime.rms_cdw_id);

          Crime.update( { rms_cdw_id:res.body[i].rms_cdw_id }, {
            offense: res.body[i].offense_type,
            date: res.body[i].occurred_date_or_date_range_start.slice(0, 10),
            day: res.body[i].occurred_date_or_date_range_start.slice(8, 10),
            month: res.body[i].month,
            year: res.body[i].year,
            time: res.body[i].occurred_date_or_date_range_start.slice(11),
            longitude: res.body[i].longitude,
            latitude: res.body[i].latitude,
            zone: res.body[i].zone_beat,
            rms_cdw_id: res.body[i].rms_cdw_id }, { upsert: true }, (err, data) => {
            if (err) { return eH(err, res);
            }

            count++;
            console.log(count);
            console.log('updated');
          });
        }
    });
};


// setInterval(() => {
 //dailyData();
//   console.log('getting data');
// }, 4000);
