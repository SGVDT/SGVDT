var port = process.env.PORT;

module.exports = {
  if (port === 3000) {
    baseUrl: 'sgvdtapp.herokuapp.com'
  } else {
    baseUrl: 'localhost:' + port
  }
};
