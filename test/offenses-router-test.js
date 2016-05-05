const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const mongoose = require('mongoose');
const request = chai.request;
const Offense = require(__dirname + '/../model/offense');
const port = process.env.PORT = 11235;
process.env.MONGO_URI = 'mongodb://localhost/offense_test_db';
var app = require(__dirname + '/../server/_server');
var server;

describe('the GET method on /api/offenses route', () => {
  before( (done) => {
    server = app(port, process.env.MONGO_URI, () => {
      var newOffense = new Offense({ offense: 'gunIncident' });
      newOffense.save( (err, data) => {
        if (err) throw err;
        this.offense = data;
      });
      done();
    });
  });
  after( (done) => {
    mongoose.connection.db.dropDatabase( () => {
      mongoose.disconnect( () => {
        server.close(done);
      });
    });
  });
  it('should GET all the offenses', (done) => {
    request('localhost:' + port)
      .get('/api/offenses')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        expect(res.body[0].offense).to.eql(this.offense.offense);
        done();
      });
  });
});
