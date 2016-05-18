const Offense = require(__dirname + '/../model/offense');
const eH = require(__dirname + '/error_handler');
const request = require('superagent');
var recordCount = 0;

var dailyData = function(callback) {
  request.get('https://data.seattle.gov/resource/tn4m-tpqu.json')
    .end((err, res) => {
      if (err) return eH(err);

      for (var i = 0; i < res.body.length; i++) {
        Offense.update({
          rms_cdw_id: res.body[i].rms_cdw_id
        }, {
          offense: res.body[i].offense_type,
          summary: res.body[i].summarized_offense_description,
          date: res.body[i].occurred_date_or_date_range_start.slice(0, 10),
          day: res.body[i].occurred_date_or_date_range_start.slice(8, 10),
          month: res.body[i].month,
          year: res.body[i].year,
          time: res.body[i].occurred_date_or_date_range_start.slice(11),
          longitude: res.body[i].longitude,
          latitude: res.body[i].latitude,
          zone: res.body[i].zone_beat,
          rms_cdw_id: res.body[i].rms_cdw_id
        }, {
          upsert: true
        }, (err) => {
          if (err) {
            return eH(err);
          }
        });
        recordCount++;
      }
      callback();
    });
};

module.exports = exports = dailyData;
