'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:menuController
 * @description
 * # menuController
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('menuController', ['$scope', '$location', function ($scope, $location) {
    $scope.getClass = function(path) {
      var currentRoute = $location.path().substring(1) || 'home';
      return path === currentRoute ? 'active' : '';
    };
  }]);
