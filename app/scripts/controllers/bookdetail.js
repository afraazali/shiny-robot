'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:BookdetailCtrl
 * @description
 * # BookdetailCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('BookdetailCtrl', ['$scope' , '$http', '$routeParams', function ($scope, $http, $routeParams) {
    var id = $routeParams.id;
     $http.get('/node/' + id, {headers: {'Accept': 'application/hal+json'}}).success(function(data) {
       $scope.bookInfo = {
        title: data.title[0].value,
        body: data.body[0].value
       };

     });

  }]);
