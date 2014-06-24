'use strict';

describe('Controller: MenucontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestApp'));

  var MenucontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenucontrollerCtrl = $controller('MenucontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should get the active class for the current path', function () {
    // expect(scope.awesomeThings.length).toBe(3);
    expect($scope.getClass('home')).toBe('');
  });
});
