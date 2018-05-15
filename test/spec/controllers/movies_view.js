'use strict';

describe('Controller: MoviesViewCtrl', function () {

  // load the controller's module
  beforeEach(module('cinemaApp'));

  var MoviesViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesViewCtrl = $controller('MoviesViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoviesViewCtrl.awesomeThings.length).toBe(3);
  });
});
