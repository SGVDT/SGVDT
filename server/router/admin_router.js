const Router = require('express').Router;
const Crime = require(__dirname + '/../../model/crime');
const eH = require(__dirname + '/../lib/error_handler');
const request = require('superagent');
var adminRouter = module.exports = exports = Router();

var getAllData = function() {
  request.get('https://data.seattle.gov/api/views/tn4m-tpqu/rows.json?accessType=DOWNLOAD')
    .end((err, res) => {
      if (err) {
        return eH(err, res);
      }
      for (var i = 0; i < res.body.data.length; i++) {
        var newCrime = new Crime({
          offense: res.body.data[i][14],
          date: res.body.data[i][15],
          longitude: res.body.data[i][22],
          lattitude: res.body.data[i][23],
          zone: res.body.data[i][20]
        });
        newCrime.save( (err, data) => {
          if (err) {
            return eH(err, res);
          }
        });
      }
      console.log('all data written to DB with ' + res.body.data.length + 'documents');
    });
};

adminRouter.get('/admin', (req, res) => {
  getAllData();
  return res.status(200).send('data stored to DB');
});
