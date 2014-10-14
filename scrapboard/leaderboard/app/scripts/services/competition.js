'use strict';

/**
 * @ngdoc service
 * @name leaderboardApp.competition
 * @description
 * # competition
 * Service in the leaderboardApp.
 */
angular.module('leaderboardApp')
    .service('competition', function competition($resource) {
        return $resource("http://golflive.apiary-mock.com/competition/:competitionId", {competitonId: '@competitionId'})
    });
