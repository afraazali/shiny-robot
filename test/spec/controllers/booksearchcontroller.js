'use strict';

describe('Controller: BooksearchcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var BooksearchcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BooksearchcontrollerCtrl = $controller('BooksearchcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
