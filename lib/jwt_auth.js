const User = require(__dirname + '/../model/user');
const jwt = require('jsonwebtoken');

module.exports = exports = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.APP_SECRET, (err, decoded) => {
    if (err) {
      return res.status(412).json({
        msg: 'required condition not met'
      });
    }
    User.findOne({
      findHash: decoded.idd
    }, (err, data) => {
      if (err) {
        return res.status(412).json({
          msg: 'required condition not met'
        });
      }
      if (!data) {
        return res.status(412).json({
          msg: 'required condition not met'
        });
      }
      req.user = data;
      next();
    });
  });
};
