const angular = require('angular');
const angmaps = require('angular-google-maps');
const logger = require('angular-simple-logger');
const lodash = require('lodash');

const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'), 'uiGmapgoogle-maps']);
require('./services')(sgvdtApp);
require('./offenses')(sgvdtApp);
require('./maps')(sgvdtApp);




sgvdtApp.config(['$routeProvider', function($rp) {
$rp
.when('/offenses', {
    templateUrl: 'templates/offenses/views/offense_view.html',
    controller: 'OffenseController',
    controllerAs: 'offensectrl'
})
.when('/map', {
    templateUrl: 'templates/maps/views/map_view.html',
    controller: 'MapController',
    controllerAs: 'mapctrl'
})
.otherwise({
    redirectTo: '/map'
});
}]);
