module.exports = function(app) {
  app.factory('newsResource', ['$http', 'handleError', function($http, handleError) {
    var Resource = function(resourceArr, errorsArr, baseUrl, options) {
      this.data = resourceArr;
      this.url = baseUrl;
      this.errors = errorsArr;
      this.options = options || {};
      this.options.errMessages = this.options.errMessages || {};
    };

    Resource.prototype.getArticles = function() {
      return $http.get('http://localhost:3000/api/news')
        .then((res) => {
          var parsed = JSON.parse(res.data.text);
          this.data.splice(0);
          for (var i = 0; i < parsed.result.docs.length; i++) {
            this.data.push(parsed.result.docs[i]);
          }
          console.log(this.data);
        }, handleError(this.errors, this.options.errMessages.getAll || 'could not fetch resource'));
    };
    return Resource;
  }]);
};
