angular.module('starter.controllers', [])

.controller('createPizzaCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {
  });

  //Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

//  // Triggered in the login modal to close it
$scope.closeLogin = function() {
  $scope.modal.hide();
};
//  // Open the login modal
$scope.login = function() {
$scope.modal.show();
};
//
//  // Perform the login action when the user submits the login form
$scope.doLogin = function() {
console.log('Doing login', $scope.loginData);
//
//    // Simulate a login delay. Remove this and replace with your login
//    // code if using a login system
 $timeout(function() {
 $scope.closeLogin();
}, 1000);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('listPizzaCtrl',function($scope,pizzaFactory){
    console.log('controlador pizza');
    
   $scope.listarPizza=function(){
     console.log("listar"); pizzaFactory.query().$promise.then(listaok,listaerror);//haciendo un consulta  
    }
    
    
    function listaok(listaPizza){
        $scope.pizza=listaPizza;
    }
    function listaerror(error){
        console.log(error);
    }
    
    //llamando la funcion 
    $scope.listarPizza();
})


//.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
//    $scope.data = {};
// 
//    $scope.login = function() {
//        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
//            $state.go('tab.create');
//        }).error(function(data) {
//            var alertPopup = $ionicPopup.alert({
//                title: 'Login fallido!',
//                template: 'Por favor verificar contrasena o usuario'
//            });
//        });
//    }
//})





.controller('updatePizzaCtrl',function($scope,$stateParams,pizzaFactory){
    console.log("Actualizar");
    $scope.parametro=$stateParams.pizzaid;
    
    pizzaFactory.get({
        id:$scope.parametro
    }).$promise.then(updateOk,updateError);
    
    
    function updateOk(pizza){
        $scope.pizza=pizza;
    }
    function updateError(error){
        console.log(error);
    }
    
    $scope.actualizarPizza=function(){
        
       pizzaFactory.update({
        id:$scope.parametro
    },{
        usuario:$scope.pizza.usuario,
        contrasena:$scope.pizza.contrasena,
        nombre:$scope.pizza.nombre,
        apellido:$scope.pizza.apellido,
        cedula:$scope.pizza.cedula,
        direccion:$scope.pizza.direccion,
        telefono:$scope.pizza.telefono
           
    }).
    $promise.then(
        function(pizzaActualizado){
        $scope.pizza=pizzaActualizado;
        },
           function(error){
            console.log(error);
        })  
    }
   
})

.controller('createPizzaCtrl', function($scope, pizzaFactory) {
    console.log("Registro");
    //sacamos lso nombre del servidor
    $scope.newPizza={
        usuario:'',
        contrasena:'',
        nombre:'',
        apellido:'',
        cedula:'',
        direccion:'',
        telefono:'',
    }
    $scope.registrarPizza=function(){
        pizzaFactory.save({
        //datos del ng-model
        usuario:$scope.newPizza.usuario,
        contrasena:$scope.newPizza.contrasena,
        nombre:$scope.newPizza.nombre,
        apellido:$scope.newPizza.apellido,
        cedula:$scope.newPizza.cedula,
        direccion:$scope.newPizza.direccion,
        telefono:$scope.newPizza.telefono,
        }).$promise.then(registroOk, registroError);
    }
    function registroOk(data){
        console.log("registar");
        $scope.newPizza={
        usuario:'',
        contrasena:'',
        nombre:'',
        apellido:'',
        cedula:'',
        direccion:'',
        telefono:'',
        }
    }
    function registroError(error){
        console.log(error);
    }
});
