'use strict';

/**
 * @ngdoc service
 * @name leaderboardApp.leaderboard
 * @description
 * # leaderboard
 * Service in the leaderboardApp.
 */
angular.module('leaderboardApp')
    .service('leaderboard', function leaderboard($resource) {
        return $resource("http://golflive.apiary-mock.com/competition/:competitionId/leaderboard", {competitonId: '@competitionId'})
    });
