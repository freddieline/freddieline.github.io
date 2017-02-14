// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views: {

              // the main template will be placed here (relatively named)
              '': { templateUrl: 'partials/partial-home.html' 
              },

              // the child views will be defined here (absolutely named)
              'mainScreen@home': { 
                templateUrl: 'partials/home/partial-main.html'
              },

              // for column two, we'll define a separate controller 
              'keyboard@home': { 
                templateUrl: 'partials/home/partial-keyboard.html'
              }
            }
        })
        
        // NUMBER GAMES VIEWS =================================
        
        .state('number_game_demo', {
          url: '/number_game_demo',
          templateUrl: 'partials/number_game/partial-demo.html',
          controller:'numberGameController'
              
        })

         .state('number_game_1', {
          url: '/number_game_1',
          templateUrl: 'partials/number_game/partial-1.html',
          controller:'numberGameController'
              
        })
          .state('number_game_2', {
          url: '/number_game_2',
          templateUrl: 'partials/number_game/partial-2.html',
          controller:'numberGameController'
              
        })
           .state('number_game_3', {
          url: '/number_game_3',
          templateUrl: 'partials/number_game/partial-3.html',
          controller:'numberGameController'
              
        })
        
        // LOGIC GAMES VIEWS =================================
        
        .state('logic_game_demo', {
            url: '/logic_game_demo',
            templateUrl: 'partials/logic_game/partial-demo.html',
            controller:'logicGameController'
          
        })

        .state('correct_logic_demo', {
            url: '/correct_logic_demo',
            templateUrl: 'partials/logic_game/partial-correct-demo.html',
            controller:'logicGameController'
          
        })

        .state('incorrect_logic_demo', {
            url: '/incorrect_logic_demo',
            templateUrl: 'partials/logic_game/partial-incorrect-demo.html',
            controller:'logicGameController'
          
        })
        .state('logic_game_1', {
            url: '/logic_game_1',
            templateUrl: 'partials/logic_game/partial-1.html',
            controller:'logicGameController'
        })

        .state('logic_game_2', {
            url: '/logic_game_2',
            templateUrl: 'partials/logic_game/partial-2.html',
            controller:'logicGameController'
        })

        .state('logic_game_3', {
            url: '/logic_game_3',
            templateUrl: 'partials/logic_game/partial-3.html',
            controller:'logicGameController'
        })

        .state('logic_game_4', {
            url: '/logic_game_4',
            templateUrl: 'partials/logic_game/partial-4.html',
            controller:'logicGameController'
        })

        .state('logic_game_5', {
          url: '/logic_game_5',
          templateUrl: 'partials/logic_game/partial-5.html',
          controller:'logicGameController'
        
        });
});


