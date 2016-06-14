const Router = require('express').Router;
const Offense = require(__dirname + '/../model/offense');
const eH = require(__dirname + '/../lib/error_handler');
var offenseRouter = module.exports = exports = Router();

offenseRouter.get('/offenses', (req, res) => {
  Offense.find( null, (err, data) => {
    if (err) return eH(err, res);
    res.status(200).json(data);
  });
});
