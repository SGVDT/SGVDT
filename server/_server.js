const express = require('express');
const app = express();
const mongoose = require('mongoose');
const adminRouter = require(__dirname + '/router/admin_router');
const offensesRouter = require(__dirname + '/router/offenses_router');
const userRouter = require(__dirname + '/router/user_router');

app.use('/api', adminRouter);
app.use('/api', offensesRouter);
app.use('/', userRouter);
app.use('/*', (req, res) => {
  res.status(404).send('not found');
});

module.exports = exports = function(port, mongooseConnect, callBack) {
  mongoose.connect(mongooseConnect);
  return app.listen(port, callBack);
};
