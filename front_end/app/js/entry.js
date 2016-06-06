const angular = require('angular');
const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'), 'ui.bootstrap']);
require('./services')(sgvdtApp);
require('./offenses')(sgvdtApp);


sgvdtApp.config(['$routeProvider', function($rp) {
$rp
.when('/offenses', {
    templateUrl: 'templates/offenses/views/offense_view.html',
    controller: 'OffenseController',
    controllerAs: 'offensectrl'
})
.otherwise({
    redirectTo: '/offenses'
});
}]);
