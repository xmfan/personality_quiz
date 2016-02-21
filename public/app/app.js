var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('state1', {
      url: "/questions",
      templateUrl: "/html/questions.html",
      controller: "QuestionsCtrl"
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

app.controller('LyricsCtrl', ['$scope', '$http', '$location', function($scope, $http) {

    $scope.query = "";

    $scope.trait = ""

    $scope.search = function() {
        console.log($scope.query)
        $http({
            method: 'GET',
            url: '/api/lyrics',
            params: {
                query: $scope.query
            }
            }).then(function successCallback(response) {
                $scope.trait = angular.copy(response)
                //$rootScope.trait = $scope.trait
            });
        }
}])

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

app.controller('QuestionsCtrl', ['$scope', '$http', '$location', function($scope, $http) {
    $scope.query=""
    $scope.trait= ""

    $scope.getem = function() {
        $scope.query = $scope.inp1 + $scope.inp2 + $scope.inp3 + $scope.inp4;
        console.log($scope.query)
        $http({
            method: 'POST',
            url: '/api/gen',
            body: {
                text: $scope.query
            }
            }).then(function successCallback(response) {
                $scope.trait = angular.copy(response)
                //$rootScope.trait = $scope.trait
            }).catch (function (err) {
                console.log(err)
            });
        }




}]);
