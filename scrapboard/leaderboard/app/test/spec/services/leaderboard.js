'use strict';

describe('Service: leaderboard', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var leaderboard;
  beforeEach(inject(function (_leaderboard_) {
    leaderboard = _leaderboard_;
  }));

  it('should do something', function () {
    expect(!!leaderboard).toBe(true);
  });

});
