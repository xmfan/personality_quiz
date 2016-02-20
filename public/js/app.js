var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "/html/state1.html"
    });
});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	console.log('MainController operational');
}]);