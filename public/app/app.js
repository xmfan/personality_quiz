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
      url: "/lyrics",
      templateUrl: "/html/lyrics.html",
      controller: "LyricsCtrl"
    });
});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	console.log('MainController operational');
}]);

app.controller('LyricsCtrl', ['$rootScope', '$scope', '$http', '$location', function($scope, $rootScope, $http) {

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
                $rootScope.trait = $scope.trait
            });
        }
}]);

