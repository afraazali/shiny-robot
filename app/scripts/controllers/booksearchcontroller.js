'use strict';

/**
 * @ngdoc function
 * @name yoTestApp.controller:BooksearchCtrl
 * @description
 * # BooksearchCtrl
 * Controller of the yoTestApp
 */
angular.module('yoTestApp')
  .controller('BooksearchCtrl', function ($scope, Search) {
    console.log('----initialize search-------');
    // Initialize Search.
    Search.setPage(0);

    $scope.library = {
      totalDisplayed: 0,
      books: [],
      key: '',
      nextPage: function() {
        Search.doSearch($scope.library.key)
        .then(function(data) {
          $scope.library.busy = true;
          for (var i = 0; i < data.length; i++) {
            $scope.library.books.push(data[i]);
          }
          $scope.library.totalDisplayed = Search.getPage() * data.length;
          $scope.library.busy = Search.isBusy();
        }, function() {
            $scope.library.busy = true;
          });
      },

      search: function() {
        $scope.library.busy = false;
        Search.setPage(0);
        $scope.library.books = [];
        $scope.library.nextPage();
      },

      empty: function() {
        if ($scope.library.key === '' || $scope.library.key === null) {
          $scope.library.search();
        }
      }
    };
  });
