const apiUrl = 'http://localhost:3000';
const angular = require('angular');
require('angular-mocks');

describe('news Controller', function() {
  var $controller;

  beforeEach(angular.mock.module('sgvdtApp'));
  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('getArticles function', function() {
    var newsctrl;

    beforeEach(angular.mock.inject(function() {
      newsctrl = $controller('NewsController');
    }));

    it('should get news articles and fill articles array', function() {
      expect(typeof newsctrl.getArticles).toEqual('function');
    });
  });
});
