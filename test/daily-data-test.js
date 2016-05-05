const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const mongoose = require('mongoose');
const mongooseConnect = 'mongodb://localhost/daily_test_db';

const port = process.env.PORT = 5555;
const app = require(__dirname + '/../server/_server');
var server;

const Offense = require(__dirname + '/../model/offense');
const dailyData = require(__dirname + '/../lib/dailyUpdate');

describe('the daily data update function', () => {
  before((done) => {
    server = app(port, mongooseConnect, () => {
      console.log('server up on ' + port);
      done();
    });
  });
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect(() => {
        server.close(done);
      });
    });
  });

  it('should update the database from SEA.gov data api', function(done) {
    dailyData((recordCount) => {
      console.log('incallback');
      Offense.count((err, data) => {
        console.log(data);
        expect(err).to.eql(null);
        expect(data).to.above(0);
        done();
      });
    });
  });
});
