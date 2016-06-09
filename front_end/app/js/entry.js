const angular = require('angular');
const angmaps = require('angular-google-maps');
const logger = require('angular-simple-logger');
const lodash = require('lodash');

const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'),
require('angular-ui-bootstrap'), require('angular-resource'), 'uiGmapgoogle-maps']);

// const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'),
// 'uiGmapgoogle-maps']);

require('./services')(sgvdtApp);
require('./offenses')(sgvdtApp);
require('./maps')(sgvdtApp);
require('./news')(sgvdtApp);


sgvdtApp.config(['$routeProvider', function($rp) {
$rp
.when('/offenses', {
    templateUrl: 'templates/offenses/views/offense_view.html'
    // controller: 'OffenseController',
    // controllerAs: 'offensectrl'
})
.when('/map', {
    templateUrl: 'templates/maps/views/map_view.html',
    controller: 'MapController',
    controllerAs: 'xxctrl'
})
.when('/news', {
    templateUrl: 'templates/news/views/news_view.html',
    controller: 'NewsController',
    controllerAs: 'newsctrl'
})
.when('/twitter', {
  templateUrl: 'templates/twitter/views/twitter_view.html',
  controller: 'TwitterController',
  controllerAs: 'newsctrl'
})
.otherwise({
    redirectTo: '/offenses'
});
}]);


// sgvdtApp.config(function(uiGmapGoogleMapApiProvider) {
//    uiGmapGoogleMapApiProvider.configure({
//        //    key: 'your api key',
//        v: '3.20', // defaults to latest 3.X anyhow
//        libraries: 'weather,geometry,visualization'
//    });
// });
