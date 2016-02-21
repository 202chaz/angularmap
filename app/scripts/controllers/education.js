'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
  .controller('EducationCtrl', function ($scope, $http, $filter, NgMap) {
	  NgMap.getMap().then(function(){
		  $scope.center = 'America';
		  $scope.zoom = 5;
	  }); 
	
	$http.get('https://blooming-springs-8979.herokuapp.com/uploads.json', {cache: true}).success(function(results) {
		$scope.education = $filter('filter')(results, {theme: 'Education'});
		$scope.mapData = $scope.education;
	});
	
  });
