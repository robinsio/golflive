'use strict';

describe('Service: competition', function () {

  // load the service's module
  beforeEach(module('leaderboardApp'));

  // instantiate service
  var competition;
  beforeEach(inject(function (_competition_) {
    competition = _competition_;
  }));

  it('should do something', function () {
    expect(!!competition).toBe(true);
  });

});
