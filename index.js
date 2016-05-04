module.exports = exports = require(__dirname + '/server/server');
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongod://localhost/HelloMongoose';

// const mongoose = require('mongoose');
// const http = requre('http');
// var port = process.env.PORT || 5000;
//
// mongoose.connect(uristring, function(err, res) {
//   if (err) {
//     console.log('Error connecting to: ' + uristring + '.' + err);
//   } else {
//     console.log('Succeeded connecting to: ' + uristring);
//   }
// });
