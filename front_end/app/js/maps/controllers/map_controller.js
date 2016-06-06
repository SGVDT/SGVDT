const angular = require('angular');
const angmaps = require('angular-google-maps');
const lodash = require('lodash');

module.exports = function(app) {
    app.controller('mainCtrl', ['uiGmapgoogle-maps', function() {
       app.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    }]);
};
