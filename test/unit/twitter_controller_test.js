const apiUrl = 'http://localhost:3000';
const angular = require('angular');
require('angular-mocks');

describe('twitter Controller', function() {
  var $controller;

  beforeEach(angular.mock.module('sgvdtApp'));
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('twitter api functions', function() {
    var twitterctrl;

    beforeEach(angular.mock.inject(function() {
      twitterctrl = $controller('TwitterController');
    }));

    it('the spdTwitter function should call the twitter api', function() {
      expect(typeof twitterctrl.spdTwitter).toEqual('function');
    });
    it('the keywordTwitter function should call the twitter api', function() {
      expect(typeof twitterctrl.keywordTwitter).toEqual('function');
    })
  });
});
