module.exports = function(app) {
  app.directive('newsListItem', function() {
    return {
      restrict: 'EAC',
      replace: true,
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/news/directives/news_list_item.html',
      scope: {
        article: '='
      }
    };
  });
};
