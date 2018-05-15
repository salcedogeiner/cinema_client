'use strict';

describe('Controller: MenuCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('cinemaApp'));

  var MenuCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuCtrlCtrl = $controller('MenuCtrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenuCtrlCtrl.awesomeThings.length).toBe(3);
  });
});
