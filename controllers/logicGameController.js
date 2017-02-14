routerApp.controller('logicGameController', function($scope, $http) {
    

	$scope.numberCorrect = 0;
	$scope.score = 0;
	$scope.totalScore = 0;
	console.log("refresh");

	console.log(localStorage.getItem("logic_game_1"));
	console.log(localStorage.getItem("logic_game_2"));
	console.log(localStorage.getItem("logic_game_3"));
	console.log(localStorage.getItem("logic_game_4"));
	console.log(localStorage.getItem("logic_game_5"));

      $http({
        method : "GET",
        url : "data/logic_game/demo.json"
    }).then(function mySuccess(response) {
        $scope.demo = response.data;
    }, function myError(response) {
        $scope.demo = response.statusText;
    });

     $http({
        method : "GET",
        url : "data/logic_game/demo.json"
    }).then(function mySuccess(response) {
        $scope.demo = response.data;
    }, function myError(response) {
        $scope.demo = response.statusText;
    });

    $http({
        method : "GET",
        url : "data/logic_game/logic_game_1.json"
    }).then(function mySuccess(response) {
        $scope.logic_game_1= response.data;
    }, function myError(response) {
        $scope.logic_game_1 = response.statusText;
    });

   $http({
        method : "GET",
        url : "data/logic_game/logic_game_2.json"
    }).then(function mySuccess(response) {
        $scope.logic_game_2= response.data;
    }, function myError(response) {
        $scope.logic_game_2 = response.statusText;
    });

    $http({
        method : "GET",
        url : "data/logic_game/logic_game_3.json"
    }).then(function mySuccess(response) {
        $scope.logic_game_3= response.data;
    }, function myError(response) {
        $scope.logic_game_3 = response.statusText;
    });

    $http({
        method : "GET",
        url : "data/logic_game/logic_game_4.json"
    }).then(function mySuccess(response) {
        $scope.logic_game_4= response.data;
    }, function myError(response) {
        $scope.logic_game_4 = response.statusText;
    });

    $http({
        method : "GET",
        url : "data/logic_game/logic_game_5.json"
    }).then(function mySuccess(response) {
        $scope.logic_game_5= response.data;
    }, function myError(response) {
        $scope.logic_game_5 = response.statusText;
    });


  	$scope.answer= function(e){
       console.log("click"+e.target.id);
       var gridId = document.getElementById("gridId").innerText;
       if(e.target.id=="true"){
       		console.log(gridId);
       		localStorage.setItem("logic_game_"+String(gridId), 1);
       		console.log(localStorage.getItem("logic_game_"+String(gridId)));

       }
       else{
	       	console.log("false");
	       	console.log(gridId);
       		localStorage.setItem("logic_game_"+String(gridId), 0);
       }
    }

    $scope.complete = function(){
        document.getElementById('initial').style.display="none";
        document.getElementById('final').style.display="block";
    	$scope.numberCorrect = parseInt(localStorage.getItem("logic_game_1"))
    	+ parseInt(localStorage.getItem("logic_game_2"))
    	+ parseInt(localStorage.getItem("logic_game_3"))
    	+ parseInt(localStorage.getItem("logic_game_4"))
    	+ parseInt(localStorage.getItem("logic_game_5"));
    	console.log("number correct"+$scope.numberCorrect);
    	$scope.score = $scope.numberCorrect * 10;
    	$scope.totalScore = $scope.score + localStorage.getItem("number_game_total_score");
    	localStorage.setItem("logic_game_total_score", $scope.score);
    } 




});