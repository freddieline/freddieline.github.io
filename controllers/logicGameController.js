routerApp.controller('logicGameController', function($scope, $http) {
    
      $http({
        method : "GET",
        url : "data/logic_game/demo.json"
    }).then(function mySuccess(response) {
        $scope.demo = response.data;
    }, function myError(response) {
        $scope.demo = response.statusText;
    });




});