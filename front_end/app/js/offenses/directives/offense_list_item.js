module.exports = exports = function(app) {
  app.directive('offenseListItem', function() {
    return {
      restrict: 'EAC',
      replace: true,
      require: '^ngController',
      transclude: true,
      templateUrl: '/templates/offenses/directives/offense_list_item.html',
      scope: {
        offense: '='
    },
      link: function(scope, element, attrs, controller) {
        scope.remove = controller.removeMug;
      }
    };
  });
};
