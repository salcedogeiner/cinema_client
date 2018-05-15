'use strict';

describe('Service: datafilms', function () {

  // load the service's module
  beforeEach(module('cinemaApp'));

  // instantiate service
  var datafilms;
  beforeEach(inject(function (_datafilms_) {
    datafilms = _datafilms_;
  }));

  it('should do something', function () {
    expect(!!datafilms).toBe(true);
  });

});
