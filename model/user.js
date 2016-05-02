'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  authentication: {
    email: { type: String },
    password: { type: String, require: true }
  },
  zipcode: { type: Number }
});

userSchema.methods.hashPassword = function(password) {
  var hash = this.authentication.password = bcrypt.hashSync(password, 8);
  return hash;
};

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.authentication.password);
};

module.exports = exports = mongoose.model('user', userSchema);
