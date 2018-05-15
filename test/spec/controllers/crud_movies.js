'use strict';

describe('Controller: CrudMoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('cinemaApp'));

  var CrudMoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrudMoviesCtrl = $controller('CrudMoviesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CrudMoviesCtrl.awesomeThings.length).toBe(3);
  });
});
