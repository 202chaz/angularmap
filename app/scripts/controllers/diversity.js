'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:DiversityCtrl
 * @description
 * # DiversityCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
  .controller('DiversityCtrl', function ($scope, $http, $filter, NgMap) {
	  NgMap.getMap().then(function(){
		  $scope.center = 'America';
		  $scope.zoom = 5;
	  });
	  
  	$http.get('https://blooming-springs-8979.herokuapp.com/uploads.json', {cache: true}).success(function(results) {
  		$scope.diversity = $filter('filter')(results, {theme: 'Diversity'});
  		$scope.mapData = $scope.diversity;
  	});

  });
