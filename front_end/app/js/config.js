// module.exports = {
//   baseUrl = ''
// };

var port = process.env.PORT;

if (port === 3000) {
    module.exports = {
        baseUrl: 'localhost:' + port
    }
} else {
      module.exports = {
        baseUrl: 'sgvdtapp.herokuapp.com'
      }
}
