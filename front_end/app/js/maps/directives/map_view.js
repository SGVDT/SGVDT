module.exports = function(app) {
  app.directive('uiGmapGoogleMap', function() {
    return {
      restrict: 'EAC',
      replace: true,
      require: '^ngController',
    //  require:'^mainCtrl',
      transclude: true,
      templateUrl: '/templates/maps/views/map_view.html',
    //   scope: {
    //       map: '='
    //   },
      link: function(scope, element, attrs, controller) {
          // examine this at some point
        scope.remove = controller.removeMug;
      }
    };
  });
};
