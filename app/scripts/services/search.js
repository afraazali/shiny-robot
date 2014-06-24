'use strict';

/**
 * @ngdoc service
 * @name yoTestApp.Search
 * @description
 * # Search
 * Factory in the yoTestApp.
 */
angular.module('yoTestApp')
  .factory('Search', ['$http', '$q', function ($http, $q) {
    var service = {};
    var _key = '';
    var _page = 0;
    var _url = '';
    var _busy = false;
    var makeSearchUrl = function(key) {
      _url = '/api/search-books?page=' + _page;
      if (key !== undefined || key !== '') {
        _key = key;
        _url = '/api/search-books/' + key + '?page=' + _page;
      }

      return _url;
    };

    service.setKey = function(key) {
      _key = key;
    };

    service.setPage = function(page) {
      _page = page;
    };

    service.getKey = function() {
      return _key;
    };

    service.getPage = function() {
      return _page;
    };

    service.isBusy = function() {
      return _busy;
    };

    service.doSearch = function(key) {
      var deferred;
      if (_busy) {
        deferred = $q.defer();
        return deferred.promise;
      }

      _busy = true;

      makeSearchUrl(key);
      _page += 1;
      console.log(_url);
      // Create URL.
      deferred = $q.defer();
      $http.get(_url).success(function(data) {
        if (!data.length) {
          _busy = true;
        }
        else {
          _busy = false;
        }
        deferred.resolve(data);
      })
      .error(function() {
        deferred.reject('There was an error');
      });
      return deferred.promise;
    };

    // Public API here
    return service;
  }]);
