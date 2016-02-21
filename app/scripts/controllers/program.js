'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:ProgramCtrl
 * @description
 * # ProgramCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
  .controller('ProgramCtrl', function ($scope, $filter, $http, $location, NgMap, $timeout) {
  	  
    	$http.get('https://blooming-springs-8979.herokuapp.com/uploads.json', {cache: true}).success(function(results) {
    		$scope.organization = $location.path().split('/')[2];
			$scope.program = $filter('filter')(results, {organization: $scope.organization}, true);
    		$scope.mapData = $scope.program;
    	});
		//Sets a delay so organization can be populated before Map loads
		$timeout(function() {
      	  NgMap.getMap().then(function(){
      		  $scope.center = $scope.program[0].state;
      		  $scope.zoom = 9;
      	  }, 1000); 
		});
    	  
		
 
	  
  });
