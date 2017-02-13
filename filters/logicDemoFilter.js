routerApp.filter('logicDemoFilter', function() {
    return function(x) {
        var url;
            console.log(x);
            if(x=="true"){
                url="correct_logic_demo"
            }
            else{
                url="incorrect_logic_demo"
            }
        return url;

    };
});