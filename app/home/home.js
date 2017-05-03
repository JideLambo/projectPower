'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
	var ref = new Firebase("https://ziuss-power-and-energy.firebaseio.com/");

	$scope.home = $firebaseArray(ref);

}]);