module.exports = exports = require(__dirname + '/server/server');

const mongoose = require('mongoose');
const http = require('http');
var port = process.env.PORT || 5000;
