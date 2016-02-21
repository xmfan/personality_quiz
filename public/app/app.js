var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('state1', {
      url: "/questions",
      templateUrl: "/html/questions.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "/html/state2.html",
      controller: "ResultsCtrl"
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

app.controller('ResultsCtrl', ['$rootScope', '$scope', '$http', '$location', function($scope, $rootScope, $http) {
    $scope.traits = {
    text: 'you are this this and this',
    stats: [{
            name: "Personality",
            children: [{
                name: "Extraversion",
                children: [{
                    name:"Openness",
                    percentage: "0.50",
                    sampling_error: "0.01",
                    children: [{
                        name: "Adventurousness",
                        percentage: "0.02",
                        sampling_error: "0.01",
                    }]
                }]
            }]
        }, {
            name: "Needs"
        }, {
            name: "Values"
        }
        ]
}
}]);
