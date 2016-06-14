var port = process.env.PORT;

module.exports = {
  if (port === 3000) {
    baseUrl: 'localhost:' + port    
  } else {
    baseUrl: 'sgvdtapp.herokuapp.com'
  }
};
