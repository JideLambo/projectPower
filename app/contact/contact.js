'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'contactCtrl'
  });
}])

.controller('contactCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {
	var ref = new Firebase('https://ziuss-power-and-energy.firebaseio.com/');

	$scope.contact = $firebaseArray(ref);

	$scope.contactRep = function(){
		console.log("adding contact... ")
	}

}]);