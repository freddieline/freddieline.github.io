routerApp.filter('logicGameFilter', function() {
    return function(x) {
        var url;
            console.log(x);
            if(x=="true"){
                url="answer_correct()"
            }
            else{
                url="answer_incorrect()"
            }
        return url;
    };
});