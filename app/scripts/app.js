'use strict';

/**
 * @ngdoc overview
 * @name yoTestApp
 * @description
 * # yoTestApp
 *
 * Main module of the application.
 */
angular
  .module('yoTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngLocale',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/library', {
        templateUrl: 'views/list.html',
        controller: 'BookListCtrl'
      })
      .when('/details/:id', {
        templateUrl: 'views/detail.html',
        controller: 'BookdetailCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'BooksearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
