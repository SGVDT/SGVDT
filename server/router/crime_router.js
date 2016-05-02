const Router = require('express').Router;
const Crime = require(__dirname + '/../../model/crime');
const bpj = require('body-parser').json();
const eH = require(__dirname + '/../lib/error_handler');
const request = require('superagent');
var crimeRouter = module.exports = Router();

crimeRouter.get('/crime', (req, res) => {
  Crime.find(null, (err, data) => {
    if (err) return eH(err, res);
    res.status(200).json(data);
  });
});
