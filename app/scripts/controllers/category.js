'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
  .controller('CategoryCtrl', function ($scope, $location, $timeout) {
    $scope.categories = [
    	{'name':'All', 'id':'all-link', 'link':'#/all'}, 
		{'name':'Education', 'id':'education-link', 'link':'#/education'},
		{'name':'Community', 'id':'community-link', 'link':'#/community'},
		{'name':'Environment', 'id':'environment-link', 'link':'#/environment'},
		{'name':'Diversity', 'id':'diversity-link', 'link':'#/diversity'}
    ];
	
	$scope.gotTo = function(c) {
		$location.path(c.link);
	};
	$timeout(function() {
	$scope.select= function(item) {
	        $scope.selected = item; 
	 };
	 }, 3000);
	
	$scope.isActive = function(item) {
	        return $scope.selected === item;
	 };

	 
  });
