'use strict';

/**
 * @ngdoc service
 * @name yoTestApp.Library
 * @description
 * # Library
 * Factory in the yoTestApp.
 */
angular.module('yoTestApp')
  .factory('Library', ['$http', function ($http) {
    // Constructor logic for pagination
    var Library = function() {
      this.books = [];
      this.busy = false;
      this.page = 0;
      this.numberOfItems = null;
      this.totalDisplayed = 0;
    };

    Library.prototype.nextPage = function() {
      var url;

      if (this.busy) {
        return;
      }

      this.busy = true;

      url = '/api/search-books?page=' + this.page;
      $http.get(url).success(function(data) {
        this.numberOfItems = data.length;
        for (var i = this.numberOfItems - 1; i >= 0; i--) {
          this.books.push(data[i]);
        }

        this.totalDisplayed = this.page * this.numberOfItems;
        this.page = this.page + 1;
        // No more data, stop pinging.
        if (!this.numberOfItems) {
          this.busy = true;
        }
        else {
          this.busy = false;
        }
      }.bind(this));
    };
    return Library;
  }]);
