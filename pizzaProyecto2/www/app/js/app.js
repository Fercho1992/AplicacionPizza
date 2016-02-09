
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngResource', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 .state('app.pizza', {
    url: '/pizza',
    views: {
      'menuContent': {
        templateUrl: 'templates/pizza.html',
          controller:'listPizzaCtrl'
      }
    }
  })
  
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })

  .state('app.registro', {
      url: '/registro',
      views: {
        'menuContent': {
          templateUrl: 'templates/registro.html',
            //controller: 'createPizzaCtrl'
        }
      }
    })
  
  
   .state('app.menuPizza', {
      url: '/menuPizza',
      views: {
        'menuContent': {
          templateUrl: 'templates/menuPizza.html',
            //controller: 'createPizzaCtrl'
        }
      }
    })
  
  
  .state('app.creaPizza', {
      url: '/creaPizza',
      views: {
        'menuContent': {
          templateUrl: 'templates/creaPizza.html',
            //controller: 'createPizzaCtrl'
        }
      }
    })
  
  
  .state('app.miOrden', {
      url: '/miOrden',
      views: {
        'menuContent': {
          templateUrl: 'templates/miOrden.html',
            //controller: 'createPizzaCtrl'
        }
      }
    })
  


  
  
  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
            //controller: 'createPizzaCtrl'
        }
      }
    })
  
//  .state('app.inicio', {
//      url: '/inicio',
//      views: {
//        'menuContent': {
//          templateUrl: 'templates/inicio.html',
//            //controller: 'createPizzaCtrl'
//        }
//      }
//    })
//  
  
  
  //Actualizar
  .state('app.actualizar',{
      url:'/actualizar',
      views:{
          'menuContent':{
              templateUrl:'templates/actualizar.html',
              controller:'updatePizzaCtrl'
          }
      }
  })
  
  
//  .state('app.pedidosPizza',{
//      url:'/pedidosPizza',
//      views:{
//          'menuContent':{
//              templateUrl:'templates/pedidosPizza.html',
//              //controller:'updatePizzaCtrl'
//          }
//      }
//  })
  
  
  .state('entrar',{
      
      url:"/entrar",
      templateUrl:"templates/login.html",
      controller: 'LoginCtrl'
  })
  
  
  
//  angular.module('radioExample', [])
//    .controller('ExampleController', ['$scope', function($scope) {
//      $scope.color = {
//        name: 'blue'
//      };
//      $scope.specialValue = {
//        "id": "12345",
//        "value": "green"
//      };
//    }])
  

//  .state('app.single', {
//    url: '/playlists/:playlistId',
//    views: {
//      'menuContent': {
//        templateUrl: 'templates/playlist.html',
//        controller: 'PlaylistCtrl'
//      }
//    }
//  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});

    