const express = require('express');
const app = express();
const mongoose = require('mongoose');
const crimeRouter = require(__dirname + '/router/crime_router');
const adminRouter = require(__dirname + '/router/admin_router');
const userRouter = require(__dirname + '/router/user_router');
// require router files here

// app.use other routes here
app.use('/api', adminRouter);
app.use('/api', crimeRouter);
app.use('/', userRouter);
app.use('/*', (req, res) => {
  res.status(400).send('not found');
});

module.exports = exports = function(port, mongooseConnect, callBack) {
  mongoose.connect(mongooseConnect);
  return app.listen(port, callBack);
};
