var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "/html/state1.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "/html/state2.html"
    })
	.state('state3', {
      url: "/state3",
      templateUrl: "/html/state3.html",
      controller: "LyricsCtrl"
    });
});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	console.log('MainController operational');
}]);

app.controller('LyricsCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.query = "";

    $scope.trait = ""

    $scope.search = function() {
        $http({
            method: 'GET',
            url: '/api/lyrics',
            params: {
                query: $scope.query
            }
            }).then(function successCallback(response) {
                $scope.trait = response.data
            });
        }
}]);

