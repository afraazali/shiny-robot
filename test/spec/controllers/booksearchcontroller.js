'use strict';

describe('Controller: BooksearchCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var BooksearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BooksearchCtrl = $controller('BooksearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.library.books).not.toBeNull();
    expect(scope.library).not.toBeUndefined();
  });
});
