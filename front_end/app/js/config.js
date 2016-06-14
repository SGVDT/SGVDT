// module.exports = {
//   baseUrl = ''
// };

var port = process.env.PORT;

if (port === 3000) {
    module.exports = {
      baseUrl: 'sgvdtapp.herokuapp.com'
    }
} else {
      module.exports = {
        baseUrl: 'localhost:' + port
      }
}
