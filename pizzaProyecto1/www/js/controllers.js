angular.module('starter.controllers', [])
  
.controller('loginCtrl', function($scope,$ionicModal, $timeout) {
    
//    $scope.loginData = {};
//
//  // Create the login modal that we will use later
//  $ionicModal.fromTemplateUrl('templates/login.html', {
//    scope: $scope
//  }).then(function(modal) {
//    $scope.modal = modal;
//  });
//
//  // Triggered in the login modal to close it
//  $scope.closeLogin = function() {
//    $scope.modal.hide();
//  };
//
//  // Open the login modal
//  $scope.login = function() {
//    $scope.modal.show();
//  };
//
//  // Perform the login action when the user submits the login form
//  $scope.doLogin = function() {
//    console.log('Doing login', $scope.loginData);
//
//    // Simulate a login delay. Remove this and replace with your login
//    // code if using a login system
//    $timeout(function() {
//      $scope.closeLogin();
//    }, 1000);
//  };
    

})

.controller('listUserCtrl',function($scope,userFactory){
    console.log('controlador user');
    
   $scope.listarUser=function(){
     console.log("listar"); 
     userFactory.query().$promise.then(listaok,listaerror);//haciendo un consulta  
    }
    
    
    function listaok(listaUser){
        $scope.user=listaUser;
    }
    function listaerror(error){
        console.log(error);
    }
    
    //llamando la funcion 
    $scope.listarUser();
})
   
//.controller('acercaDeCtrl', function($scope) {
//
//})


.controller('updateUserCtrl',function($scope,$stateParams,userFactory){
    console.log("Actualizar");
    $scope.parametro=$stateParams.userid;
    
    userFactory.get({
        id:$scope.parametro
    }).$promise.then(updateOk,updateError);
    
    
    function updateOk(user){
        $scope.user=user;
    }
    function updateError(error){
        console.log(error);
    }
    
    $scope.actualizarUser=function(){
        
       userFactory.update({
        id:$scope.parametro
    },{
        usuario:$scope.user.usuario,
        contrasena:$scope.user.contrasena,
        nombre:$scope.user.nombre,
        apellido:$scope.user.apellido,
        cedula:$scope.user.cedula,
        direccion:$scope.user.direccion,
        telefono:$scope.user.telefono
    }).
    $promise.then(
        function(userActualizado){
        $scope.user=userActualizado;
        },
           function(error){
            console.log(error);
        })  
    }
   
})


.controller('registroUserCtrl', function($scope,userFactory) {
    console.log("Registro");
     //ssacamos lso nombre del servidor
    $scope.newUser={
        usuario:'',
        contrasena:'',
        nombre:'',
        apellido:'',
        cedula:'',
        direccion:'',
        telefono:''
    }
    $scope.registrarUser=function(){
        userFactory.save({
        //datos del ng-model
        usuario:$scope.newUser.usuario,
        contrasena:$scope.newUser.contrasena,
        nombre:$scope.newUser.nombre,
        apellido:$scope.newUser.apellido,
        cedula:$scope.newUser.cedula,
        direccion:$scope.newUser.direccion,
        telefono:$scope.newUser.telefono,
        }).$promise.then(registroOk, registroError);
    }
    function registroOk(data){
        console.log("Registro nuevo usuario");
        $scope.newUser={
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

})


   
.controller('creaTuPizzaCtrl', function($scope) {
    
})
   
.controller('menúMamaMiaPizzaCtrl', function($scope) {

})
   
.controller('pizzasCtrl', function($scope) {

})
   
.controller('usuariosCtrl', function($scope) {

})
   
.controller('descripcionCtrl', function($scope) {

})
   
.controller('miOrdenCtrl', function($scope) {

})




 