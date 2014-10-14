'use strict';

/**
 * @ngdoc function
 * @name leaderboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leaderboardApp
 */
angular.module('leaderboardApp')
    .controller('LeaderboardCtrl', function ($scope, competition, leaderboard) {

        var competitionId = "2aae04e0-53ae-11e4-916c-0800200c9a66";

        $scope.competition = competition.get({competitionId: competitionId});
        $scope.leaderboard = leaderboard.query({competitionId: competitionId});
    });
