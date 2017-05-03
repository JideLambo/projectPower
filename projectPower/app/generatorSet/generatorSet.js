'use strict';

angular.module('myApp.generatorSet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/generatorSet', {
    templateUrl: 'generatorSet/generatorSet.html',
    controller: 'generatorSetCtrl'
  });
}])

.controller('generatorSetCtrl', ['$scope', function() {
	console.log("generatorSet is loading...");
}]);