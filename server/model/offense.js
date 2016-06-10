const mongoose = require('mongoose');

var offenseSchema = new mongoose.Schema({
  offense: { type: String },
  summary: { type: String },
  date: { type: String },
  day: { type: Number },
  month: { type: Number },
  year: { type: Number },
  time: { type: String },
  longitude: { type: Number },
  latitude: { type: Number },
  zone: { type: String },
  /* eslint-disable camelcase */
  rms_cdw_id: { type: String }
  /* eslint-enable camelcase */
});

module.exports = mongoose.model('Offense', offenseSchema);
