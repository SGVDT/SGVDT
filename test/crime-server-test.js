// const chai = require('chai');
// const expect = chai.expect;
// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);
// const mongoose = require('mongoose');
// const request = chai.request;
// // the following order is important:
// const port = process.env.PORT = 1234;
// process.env.MONGO_URI = 'mongodb://localhost/crime_test_db';
// require(__dirname + '/../server/_server');
//
// describe('the GET method', () => {
//   after((done) => {
//     mongoose.connection.db.dropDatabase(() => {
//       done();
//     });
//   });
//   it('should GET all the crimes', (done) => {
//     request('localhost:' + port)
//       .get('/api/crime')
//       .end((err, res) => {
//         expect(err).to.eql(null);
//         expect(Array.isArray(res.body)).to.eql(true);
//         expect(res.body.length).to.eql(0);
//         done();
//       });
//   });
// });
