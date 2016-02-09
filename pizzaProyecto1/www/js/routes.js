/*angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('mamaMiaPizza.acercaDe', {
      url: '/aboutUs',
      views: {
        'side-menu21': {
          templateUrl: 'templates/acercaDe.html',
          controller: 'acercaDeCtrl'
        }
      }
    })
        
      
    
      
    .state('mamaMiaPizza', {
      url: '/sideMenuPizza',
      abstract:true,
      templateUrl: 'templates/mamaMiaPizza.html'
    })
      
    
      
        
    .state('registro', {
      url: '/registryUsers',
      templateUrl: 'templates/registro.html',
      controller: 'registroCtrl'
    })
        
      
    .state('mamaMiaPizza.usuarios',{
      url:'/usuarios',
      views:{
          'menuContent':{
              templateUrl:'templates/usuarios.html',
              controller:'listUserCtrl'
          }
      }
  })
      
        
    .state('mamaMiaPizza.creaTuPizza', {
      url: '/createPizza',
      views: {
        'side-menu21': {
          templateUrl: 'templates/creaTuPizza.html',
          controller: 'creaTuPizzaCtrl'
        }
      }
    })
        
      
    //Actualizar
  .state('mamaMiaPizza.actualizarUsuario',{
      url:'/actualizar/:userid',
      views:{
          'menuContent':{
              templateUrl:'templates/actualizarUsuario.html',
              controller:'updateUserCtrl'
          }
      }
  })
      
        
    .state('mamaMiaPizza.menúMamaMiaPizza', {
      url: '/menuPizza',
      views: {
        'side-menu21': {
          templateUrl: 'templates/menúMamaMiaPizza.html',
          controller: 'menúMamaMiaPizzaCtrl'
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
        
      
    
      
        
    .state('mamaMiaPizza.miOrden', {
      url: '/myOrder',
      views: {
        'side-menu21': {
          templateUrl: 'templates/miOrden.html',
          controller: 'miOrdenCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});*/