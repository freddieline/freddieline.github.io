routerApp.controller('numberGameController', function($scope, $http) {
    
    $scope.message = 'test';
    $scope.myData = Object.create(Object.prototype);
    $scope.immutable = Object.create(Object.prototype);
    $scope.difficulty = Object.create(Object.prototype);
    $scope.numberOfMoves = 0;
    $scope.score;
    $scope.totalScore;

    console.log(localStorage.getItem("number_game_1"));
    console.log(localStorage.getItem("number_game_2"));
    console.log(localStorage.getItem("number_game_3"));
    console.log(parseInt(localStorage.getItem("number_game_1"))+parseInt(localStorage.getItem("number_game_2"))+parseInt(localStorage.getItem("number_game_3")));
    $http({
        method : "GET",
        url : "data/number_game/demo.json"
    }).then(function mySuccess(response) {
        $scope.demo = response.data;
        $scope.myData["demo"] = response.data;
        $scope.immutable["demo"] = JSON.parse(JSON.stringify(response.data));
    }, function myError(response) {
        $scope.demo = response.statusText;
    });

    $http({
        method : "GET",
        url : "data/number_game/number_game_1.json"
    }).then(function mySuccess(response) {
        $scope.number_game_1 = response.data;
        $scope.myData["number_game_1"] = response.data;
        $scope.immutable["number_game_1"] = JSON.parse(JSON.stringify(response.data));
        $scope.difficulty["number_game_1"] = response.data.difficulty;
    }, function myError(response) {
        $scope.demo = response.statusText;
    });

    $http({
        method : "GET",
        url : "data/number_game/number_game_2.json"
    }).then(function mySuccess(response) {
        $scope.number_game_2 = response.data;
        $scope.myData["number_game_2"] = response.data;
        $scope.immutable["number_game_2"] = JSON.parse(JSON.stringify(response.data));
        $scope.difficulty["number_game_2"] = response.data.difficulty;
    }, function myError(response) {
        $scope.demo = response.statusText;
    });

    $http({
        method : "GET",
        url : "data/number_game/number_game_3.json"
    }).then(function mySuccess(response) {
        $scope.number_game_3 = response.data;
        $scope.myData["number_game_3"] = response.data;
        $scope.immutable["number_game_3"] = JSON.parse(JSON.stringify(response.data));
        $scope.difficulty["number_game_3"] = response.data.difficulty;
    }, function myError(response) {
        $scope.demo = response.statusText;
    });


    // up clicks
    $scope.up1Click = function(){
        var value;
        value = document.getElementById('00').innerHTML;
        document.getElementById('00').innerHTML = document.getElementById('10').innerHTML;
        document.getElementById('10').innerHTML = document.getElementById('20').innerHTML;
        document.getElementById('20').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }
     $scope.up2Click = function(){
        var value;
        value = document.getElementById('01').innerHTML;
        document.getElementById('01').innerHTML = document.getElementById('11').innerHTML;
        document.getElementById('11').innerHTML = document.getElementById('21').innerHTML;
        document.getElementById('21').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

     $scope.up3Click= function(){
        var value;
        value = document.getElementById('02').innerHTML;
        document.getElementById('02').innerHTML = document.getElementById('12').innerHTML;
        document.getElementById('12').innerHTML = document.getElementById('22').innerHTML;
        document.getElementById('22').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

    // down clicks
    $scope.down1Click= function(){
        var value;
        value = document.getElementById('20').innerHTML;
        document.getElementById('20').innerHTML = document.getElementById('10').innerHTML;
        document.getElementById('10').innerHTML = document.getElementById('00').innerHTML;
        document.getElementById('00').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

    $scope.down2Click= function(){
        var value;
        value = document.getElementById('21').innerHTML;
        document.getElementById('21').innerHTML = document.getElementById('11').innerHTML;
        document.getElementById('11').innerHTML = document.getElementById('01').innerHTML;
        document.getElementById('01').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

    $scope.down3Click= function(){
        var value;
        value = document.getElementById('22').innerHTML;
        document.getElementById('22').innerHTML = document.getElementById('12').innerHTML;
        document.getElementById('12').innerHTML = document.getElementById('02').innerHTML;
        document.getElementById('02').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

    // left clicks
    $scope.left1Click= function(){
        var value;
        value = document.getElementById('00').innerHTML;
        document.getElementById('00').innerHTML = document.getElementById('01').innerHTML;
        document.getElementById('01').innerHTML = document.getElementById('02').innerHTML;
        document.getElementById('02').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }
    $scope.left2Click= function(){
        var value;
        value = document.getElementById('10').innerHTML;
        document.getElementById('10').innerHTML = document.getElementById('11').innerHTML;
        document.getElementById('11').innerHTML = document.getElementById('12').innerHTML;
        document.getElementById('12').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

    $scope.left3Click= function(){
        var value;
        value = document.getElementById('20').innerHTML;
        document.getElementById('20').innerHTML = document.getElementById('21').innerHTML;
        document.getElementById('21').innerHTML = document.getElementById('22').innerHTML;
        document.getElementById('22').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

    // right clicks
    $scope.right1Click= function(){
        var value;
        value = document.getElementById('02').innerHTML;
        document.getElementById('02').innerHTML = document.getElementById('01').innerHTML;
        document.getElementById('01').innerHTML = document.getElementById('00').innerHTML;
        document.getElementById('00').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }
    $scope.right2Click= function(){
        var value;
        value = document.getElementById('12').innerHTML;
        document.getElementById('12').innerHTML = document.getElementById('11').innerHTML;
        document.getElementById('11').innerHTML = document.getElementById('10').innerHTML;
        document.getElementById('10').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }
    $scope.right3Click= function(){
        var value;
        value = document.getElementById('22').innerHTML;
        document.getElementById('22').innerHTML = document.getElementById('21').innerHTML;
        document.getElementById('21').innerHTML = document.getElementById('20').innerHTML;
        document.getElementById('20').innerHTML = value;
        $scope.numberOfMoves+=1;
        checkCorrect();
    }

    function checkCorrect(){
    
        var anyFalse = false;
        for(var y = 0; y < 3 ; y++){
            for(var z = 0; z < 3 ; z++){
                if(document.getElementById(String(y)+String(z)).innerText!=document.getElementById("a"+String(y)+String(z)).innerText){
                    anyFalse = true;
                }
            }
        }
        if(anyFalse==false){
            var gridId = document.getElementById("gridId").innerText;

            if(gridId!="demo"){
                $scope.score = $scope.difficulty["number_game_"+String(gridId)] - $scope.numberOfMoves;
                console.log("score!!"+$scope.score);
                localStorage.setItem("number_game_"+String(gridId), $scope.score);
            }
            if(gridId==3){
                $scope.totalScore =  parseInt(localStorage.getItem("number_game_1"))+parseInt(localStorage.getItem("number_game_2"))+parseInt(localStorage.getItem("number_game_3"));
            }
            setTimeout(function(){ 
                document.getElementById('initial').style.display="none";
                document.getElementById('final').style.display="block";
            },1000);
            
        }
    }



});