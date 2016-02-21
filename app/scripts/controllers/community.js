'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:CommunityCtrl
 * @description
 * # CommunityCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
  .controller('CommunityCtrl', function ($scope, $http, $filter, NgMap) {
	  NgMap.getMap().then(function(){
		  $scope.center = 'America';
		  $scope.zoom = 5;
	  }); 
  	$http.get('https://blooming-springs-8979.herokuapp.com/uploads.json', {cache: true}).success(function(results) {
  		$scope.community = $filter('filter')(results, {theme: 'Community'});
  		$scope.mapData = $scope.community;
  	});
  });
