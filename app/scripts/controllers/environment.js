'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:EnvironmentCtrl
 * @description
 * # EnvironmentCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
  .controller('EnvironmentCtrl', function ($scope, $http, $filter, NgMap) {
	  NgMap.getMap().then(function(){
		  $scope.center = 'America';
		  $scope.zoom = 5;
	  }); 
	  
    	$http.get('https://blooming-springs-8979.herokuapp.com/uploads.json', {cache: true}).success(function(results) {
    		$scope.environment = $filter('filter')(results, {theme: 'Environment'});
    		$scope.mapData = $scope.environment;
    	});
  });
