'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
.controller('AllCtrl', function (NgMap, $scope, $http) {
  NgMap.getMap().then(function(){
	  $scope.center = 'America';
	  $scope.zoom = 5;
  }); 
    

  
$http.get('https://blooming-springs-8979.herokuapp.com/uploads.json',{cache: true}).success(function(results) {
	
	$scope.getPoints = function() {
		
		$scope.mapData = results;	
	};
	
	$scope.allPoints = function() {
		
		$scope.mapData = results;

	};
});
  });
