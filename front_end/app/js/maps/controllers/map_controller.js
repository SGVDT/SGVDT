const angular = require('angular');
const angmaps = require('angular-google-maps');
const lodash = require('lodash');

    // app.controller('MapController', function($scope, uiGmapGoogleMapApi) {

    //  uiGmapGoogleMapApi
 // uiGmapGoogleMapApi

// uiGmapgoogle-maps
module.exports = function(app) {
    app.controller('MapController', function($scope) {
    $scope.map = { center: { latitude: 47.618217, longitude: -122.351832 }, zoom: 8 };
    });
};



// (47.618217, -122.351832);

// uiGmapGoogleMapApi.then(function(maps) {
//   console.log('4:31 and now I learn about maps.');
// });
