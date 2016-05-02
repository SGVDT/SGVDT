const express = require('express');
const app = express();
const mongoose = require('mongoose');
// require router files here


// app.use other routes here

app.use('/*', (req, res) => {
  res.status(400).send('not found');
});

module.exports = exports = function(port, mongooseConnect, callBack) {
  mongoose.connect(mongooseConnect);
  return app.listen(port, callBack);
};
