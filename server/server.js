const server = require(__dirname + '/_server');
const port = process.env.PORT || 3000;
const mongooseConnect = process.env.MONGODB_URI || 'mongodb://localhost/sgvdt_appDB';

server(port, mongooseConnect, () => {
  console.log('server up on ' + port);
});
