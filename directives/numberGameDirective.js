routerApp.directive('myEnter',function(){
	return function (scope, element, attrs){


		element.bind("keydown keypress",function (event){
			console.log('click'+event);



			return function (scope, element, attrs){
				element.bind("keydown keypress",function (event){
					scope.$apply(function(){
					scope.$eval(attrs.myEnter);
					});
					if(event.which!=13){
						event.preventDefault();
					}
				});
			};

		});


	};
});

