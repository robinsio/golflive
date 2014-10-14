'use strict';

/**
 * @ngdoc service
 * @name leaderboardApp.course
 * @description
 * # course
 * Service in the leaderboardApp.
 */
angular.module('leaderboardApp')
  .service('course', function course($resource) {
        return $resource("http://golflive.apiary-mock.com/course/:courseId", {courseId: '@courseId'});
  });
