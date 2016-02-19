'use strict';

/**
 * @ngdoc function
 * @name mapDemoApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the mapDemoApp
 */
angular.module('mapDemoApp')
  .controller('CategoryCtrl', function ($scope) {
    $scope.categories = [
    	{'name':'All'}, {'name':'Education'},{'name':'Community'},{'name':'Environment'},{'name':'Diversity'}
    ];
  });
