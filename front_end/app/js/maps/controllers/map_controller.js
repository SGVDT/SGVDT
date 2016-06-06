const angular = require('angular');
const angmaps = require('angular-google-maps');
const lodash = require('lodash');

module.exports = function(app) {
    app.controller('MapController', function($scope) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
};


// ['uiGmapgoogle-maps'];
