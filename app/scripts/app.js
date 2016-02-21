'use strict';

/**
 * @ngdoc overview
 * @name mapDemoApp
 * @description
 * # mapDemoApp
 *
 * Main module of the application.
 */
angular
  .module('mapDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/all', {
        templateUrl: 'views/all.html',
        controller: 'AllCtrl',
        controllerAs: 'all'
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl',
        controllerAs: 'education'
      })
      .when('/community', {
        templateUrl: 'views/community.html',
        controller: 'CommunityCtrl',
        controllerAs: 'community'
      })
      .when('/environment', {
        templateUrl: 'views/community.html',
        controller: 'EnvironmentCtrl',
        controllerAs: 'environment'
      })
      .when('/diversity', {
        templateUrl: 'views/community.html',
        controller: 'DiversityCtrl',
        controllerAs: 'diversity'
      })
      .when('/program/:organization', {
        templateUrl: 'views/program.html',
        controller: 'ProgramCtrl',
        controllerAs: 'program'
      })
      .otherwise({
        redirectTo: '/all'
      });
  });
