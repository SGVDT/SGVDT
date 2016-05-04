'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String },
  password: { type: String, require: true },
  zipcode: { type: Number }
});

userSchema.methods.generateHash = function(password) {
  return this.password = bcrypt.hashSync(password, 8);
};

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateToken = function() {
  return jwt.sign({ idd: this._id }, process.env.APP_SECRET);
};

module.exports = exports = mongoose.model('User', userSchema);
