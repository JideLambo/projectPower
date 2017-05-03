'use strict';

angular.module('myApp.ziussProducts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ziussProducts', {
    templateUrl: 'ziussProducts/ziussProducts.html',
    controller: 'ziussProductsCtrl'
  });
}])

.controller('ziussProductsCtrl', ['$scope', function() {
	console.log("ziussProducts is loading...");
}]);