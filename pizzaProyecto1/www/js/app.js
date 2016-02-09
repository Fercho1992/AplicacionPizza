// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngResource', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('app', {
      url: '/app',
      //abstract:true,
      templateUrl: 'templates/mamaMiaPizza.html'
    })

      .state('app.usuarios',{
      url:'/usuarios',
      views:{
          'menuContent':{
              templateUrl:'templates/usuarios.html',
              controller:'listUserCtrl'
          }
      }
  })

    
    .state('app.login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      //controller: 'loginCtrl'
    })

     .state('app.registro', {
      url: '/registryUsers',
      templateUrl: 'templates/registro.html',
      controller: 'registroCtrl'
    })

     .state('mamaMiaPizza.menuMamaMiaPizza', {
      url: '/menuPizza',
      views: {
        'side-menu21': {
          templateUrl: 'templates/menúMamaMiaPizza.html',
          //controller: 'menuMamaMiaPizzaCtrl'
        }
      }
    })
        
    .state('mamaMiaPizza.creaTuPizza', {
      url: '/createPizza',
      views: {
        'side-menu21': {
          templateUrl: 'templates/creaTuPizza.html',
          //controller: 'creaTuPizzaCtrl'
        }
      }
    })    



    .state('app.miOrden', {
      url: '/myOrder',
      views: {
        'side-menu21': {
          templateUrl: 'templates/miOrden.html',
          //controller: 'miOrdenCtrl'
        }
      }
    })
      
    

    .state('app.acercaDe', {
      url: '/aboutUs',
      views: {
        'side-menu21': {
          templateUrl: 'templates/acercaDe.html',
          //controller: 'acercaDeCtrl'
        }
      }
    })
        
      

    //Actualizar
  .state('app.actualizarUsuario',{
      url:'/actualizar/:userid',
      views:{
          'menuContent':{
              templateUrl:'templates/actualizarUsuario.html',
              controller:'updateUserCtrl'
          }
      }
  })
      
        
    
  
  
      
      
        
    .state('pizzas', {
      url: '/descriptionPizza',
      templateUrl: 'templates/pizzas.html',
      controller: 'pizzasCtrl'
    })
        
      
    
      
        
//    .state('descripcion', {
//      url: '/descripcion',
//      templateUrl: 'templates/descripcion.html',
//      controller: 'usuariosCtrl'
//    })
        
      
    
      
        
    .state('descripcion', {
      url: '/descriptionUsers',
      templateUrl: 'templates/descripcion.html',
      controller: 'listUserCtrl'
    })
        
      
    
      
        
    
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});