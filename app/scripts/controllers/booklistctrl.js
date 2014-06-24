'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:BookListCtrl
 * @description
 * # BookListCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('BookListCtrl', ['$scope', 'Library', function ($scope, Library) {
    $scope.library = new Library();
  }]);
