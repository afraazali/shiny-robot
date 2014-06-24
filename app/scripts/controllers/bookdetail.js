'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:BookdetailCtrl
 * @description
 * # BookdetailCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('BookdetailCtrl', ['$http', '$routeParams', function ($http, $routeParams) {
    $http.get('/node/' + $routeParams.id).success(function(data) {
      $scope.book = data;
    });
  }]);
