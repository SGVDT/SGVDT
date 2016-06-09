var baseUrl = require('../../config').baseUrl;

module.exports = function(app) {
  app.controller('SignInController', ['$http', '$location', 'sgvHandleError', function($http, $location, handleError) {
    this.buttonText = 'Sign in';
    this.errors = [];
    this.authenticate = function(user) {
      $http({
        method: 'GET',
        url: baseUrl + '/signin',
        headers: {
          'Authorization': 'Basic ' + window.btoa(user.username + ':' + user.password)
        }
      })
        .then((res) => {
          window.localStorage.token = res.data.token;
          $location.path('/users');
        }, handleError(this.errors, 'could not sign into user'));
    };
  }]);
};
