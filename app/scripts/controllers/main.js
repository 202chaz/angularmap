'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
.controller('MainCtrl', function (NgMap, $scope, $http) {
  NgMap.getMap().then(function(map){
	  $scope.center = 'America';
	  $scope.zoom = 5;
	  console.log('markers', map.markers);
	  console.log('shapes', map.shapes);  
  }); 
$http.get('https://blooming-springs-8979.herokuapp.com/uploads.json').success(function(results) {
	$scope.mapData = results;
	console.log($scope.mapData);
});
  });
