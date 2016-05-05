const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const mongoose = require('mongoose');
const request = chai.request;
const Crime = require(__dirname + '/../model/crime');
require(__dirname + '/../server/router/daily_router');
// the following order is important:
const port = process.env.PORT = 11235;
process.env.MONGO_URI = 'mongodb://localhost/admin_test_db';
var app = require(__dirname + '/../server/_server');
var server;

describe('the daily data pull', () => {
  before((done) => {
    server = app(port, process.env.MONGO_URI, () => {
      console.log('server up on ' + port);
      done();
    });
  });
  after(function(done) {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect(() => {
        server.close(done);
      });
    });
  });
  it('should GET all the crimes', (done) => {
    Crime.count((err, data) => {
      console.log("data is ", data);
      expect(err).to.eql(null);
      console.log("data length is: ", data.length);
      expect(data.length).to.not.eql(0);
      done();
    });
  });
});
