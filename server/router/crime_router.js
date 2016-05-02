const Router = require('express').Router;
const Crime = require(__dirname + '/../../model/crime');
const bpj = require('body-parser').json();
const eH = require(__dirname + '/../lib/error_handler');
const request = require('superagent');
var crimeRouter = module.exports = Router();



crimeRouter.post('/crime', bpj, (req, res) => {

  request.get('https://data.seattle.gov/api/views/tn4m-tpqu/rows.json?accessType=DOWNLOAD')
      .end((err, res) => {
        if (err) { console.log(err);
        }
        for (var i = 0; i < res.body.data.length; i++) {
          console.log(res.body.data.length);


          var newCrime = new Crime({
            offense: res.body.data[i][14],
            date: res.body.data[i][15],
            longitude: res.body.data[i][22],
            lattitude: res.body.data[i][23],
            zone: res.body.data[i][20]
          } );
        //   res.end();

          newCrime.save((err, data) => {
            if (err) return eH(err, res);
            console.log(res.body.data.length);
          });

          console.log(res.body.data.length);
        }
      });

  console.log(req.body);
});

crimeRouter.get('/crime', (req, res) => {
  Crime.find(null, (err, data) => {
    if (err) return eH(err, res);
    res.status(200).json(data);
    // console.log(res.data.toString());

  });
});
