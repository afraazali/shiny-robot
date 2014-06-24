'use strict';

describe('Controller: BookListCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var BookListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookListCtrl = $controller('BookListCtrl', {
      $scope: scope
    });
  }));

  it('should have a library property full of books', function () {
    expect(scope.library.books.length).toBe(10);
  });
});
