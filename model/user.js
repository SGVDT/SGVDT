'use strict';

const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String },
  password: { type: String, require: true },
  zipcode: { type: Number }
});

module.exports = exports = mongoose.model('user', userSchema);
