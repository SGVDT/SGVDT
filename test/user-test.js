const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const User = require(__dirname + '/../model/user');
const mongoose = require('mongoose');
const request = chai.request;
// the following order is important:
const port = process.env.PORT = 5555;
process.env.MONGO_URI = 'mongodb://localhost/user_test_db';
var app = require(__dirname + '/../server/_server');

describe('signup and signin user routes', function() {
  before((done) => {
    app(port, process.env.MONGO_URI, () => {
      var newUser = new User ({ username: 'one', password: 'one' });
      newUser.generateHash('one');

      newUser.save((err, data) => {
        if (err) throw err;
        this.user = data;
        this.token = data.generateToken();
      });
    done();
    });
  });

  after(function(done) {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect(done);
    });
  });

  it('should generate a new user and token with signup', (done) => {
    request('localhost:' + port)
    .post('/signup')
    .send({ username: 'two', password: 'two' })
    .end((err, res) => {
      User.findOne({ username: 'two' }, (err, data) => {
        expect(err).to.eql(null);
        expect(data.username).to.eql('two');
        expect(res.body.token).to.not.eql(null);
      });
      done();
    });
  });

  it('should log in user and generate a token at signin', (done) => {
    request('localhose: ' + port)
    .get('/signin')
    .auth('one', 'one')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body).to.not.eql(null);
      expect(res.body.token).to.not.eql(null);
    });
    done();
  });
});
