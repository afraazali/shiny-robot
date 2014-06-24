'use strict';

describe('Controller: BookdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var BookdetailCtrl,
    scope,

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookdetailCtrl = $controller('BookdetailCtrl', {
      $scope: scope,
      $routeParams: {id: 1}
    });
  }));

  it('should have at least one book in library.book property', function () {
    expect(scope.book).not.toBeNull();
  });
});
