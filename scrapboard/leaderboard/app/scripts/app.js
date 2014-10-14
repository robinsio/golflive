'use strict';

/**
 * @ngdoc overview
 * @name leaderboardApp
 * @description
 * # leaderboardApp
 *
 * Main module of the application.
 */
angular
    .module('leaderboardApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/leaderboard', {
                templateUrl: 'views/leaderboard.html',
                controller: 'LeaderboardCtrl'
            })
            .when('/scorecard', {
              templateUrl: 'views/scorecard.html',
              controller: 'ScorecardCtrl'
            })
            .otherwise({
                redirectTo: '/leaderboard'
            });
    });
