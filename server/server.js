if (!process.env.APP_SECRET) {
  throw new Error('you need to set app secret env variable');
}

const server = require(__dirname + '/_server');
const port = process.env.PORT || 3000;
const mongooseConnect = process.env.MONGODB_URI || 'mongodb://localhost/sgvdt_appDB';

server(port, mongooseConnect, () => {
  console.log('server up on ' + port);
  require(__dirname + '/../lib/setInterval');
});
