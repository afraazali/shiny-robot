'use strict';

describe('Controller: menuController', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var menuController,
    scope,
    location,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    rootScope = $rootScope;
    menuController = $controller('menuController', {
      $scope: scope
    });
  }));

  it('should get the active class for the home path', function () {
    location.path('/');
    rootScope.$apply();
    expect(scope.getClass('home')).toBe('active');
    expect(scope.getClass('library')).not.toBe('active');
    expect(scope.getClass('search')).not.toBe('active');
  });

  it('should get the active class for the library path', function () {
    location.path('/library');
    rootScope.$apply();
    expect(scope.getClass('library')).toBe('active');
    expect(scope.getClass('home')).not.toBe('active');
    expect(scope.getClass('search')).not.toBe('active');
  });

  it('should get the active class for the search path', function () {
    location.path('/search');
    rootScope.$apply();
    expect(scope.getClass('search')).toBe('active');
    expect(scope.getClass('library')).not.toBe('active');
    expect(scope.getClass('home')).not.toBe('active');
  });
});
