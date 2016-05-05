const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const mongoose = require('mongoose');
const request = chai.request;
const Crime = require(__dirname + '/../model/crime');
// the following order is important:
const port = process.env.PORT = 11235;
process.env.MONGO_URI = 'mongodb://localhost/admin_test_db';
var app = require(__dirname + '/../server/_server');

describe('the GET method on CRIME', () => {
  before((done) => {
    app(port, process.env.MONGO_URI, () => {
      var newCrime = new Crime({offense: "crime"});
      newCrime.save((err, data) => {
        if (err) throw err;
        this.crime = data;
      });
      done();
    });
  });
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });
  it('should GET all the crimes', (done) => {
    request('localhost:' + port)
      .get('/api/crime')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        expect(res.body[0].offense).to.eql(this.crime.offense);
        done();
      });
  });
});
