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
          for (var j = 0; j < this.data.length; j++) {
            var date = this.data[j].source.enriched.url.publicationDate.date;
            date = date.substr(0, 8);
            var year = date.substr(0, 4);
            var month = date.substr(4, 2);
            var day = date.substr(6, 2);
            date = month + '-' + day + '-' + year;
            this.data[j].source.enriched.url.publicationDate.date = date;
          }
        }, handleError(this.errors, this.options.errMessages.getAll || 'could not fetch resource'));
    };
    return Resource;
  }]);
};
