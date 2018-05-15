'use strict';

describe('Controller: CrudCinemasCtrl', function () {

  // load the controller's module
  beforeEach(module('cinemaApp'));

  var CrudCinemasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrudCinemasCtrl = $controller('CrudCinemasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrudCinemasCtrl.awesomeThings.length).toBe(3);
  });
});
