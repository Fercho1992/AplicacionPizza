angular.module('app.controllers', [])


.controller('creaTuPizzaCtrl', function($scope) {

})
   
.controller('menúMamaMiaPizzaCtrl',function($scope) {

})
   
.controller('pizzasCtrl', function($scope) {

})
   
.controller('usuariosCtrl', function($scope) {

})


   .controller('acercaDeCtrl', function($scope) {

})


   
.controller('miOrdenCtrl', function($scope) {

})




.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state,$ionicModal, $timeout) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('mamaMiaPizza.acercaDe');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login fallido!',
                template: 'Por favor revisar su usuario o la contrasena!'
            });
        });
    }
})



.controller('listUserCtrl', function($scope,userFactory) {
    
     console.log('controlador user');
    
   $scope.listarUser=function(){
     console.log("listar"); userFactory.query().$promise.then(listaok,listaerror);//haciendo un consulta  
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

   
.controller('updateUserCtrl',function($scope,$stateParams,userFactory){
    console.log("Actualizar");
    $scope.parametro=$stateParams.userid;
    
    userFactory.get({
        id:$scope.parametro
    }).$promise.then(function(user){
        
        $scope.user=user;
    },function(error){
        console.log(error);
    });
    
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

 //Control de ingresos de usuarios

.controller('createUserCtrl', function($scope,userFactory) {
    console.log("registro");
    
    $scope.newUser={
        usuario:'',
        contrasena:'',
        nombre:'',
        apellido:'',
        cedula:'',
        direccion:'',
        telefono:''
    }
    
    $scope.registrarNewUser=function(){
        userFactory.save({
        //datos del ng-model
        usuario:$scope.newUser.usuario,
        contrasena:$scope.newUser.contrasena,
        nombre:$scope.newUser.nombre,
        apellido:$scope.newUser.apellido,
        cedula:$scope.newUser.cedula,
        direccion:$scope.newUser.direccion,
        telefono:$scope.newUser.telefono
        }).$promise.then(registroOk, registroError);
    }
    function registroOk(data){
        console.log("registar");
        $scope.newUser={
        usuario:'',
        contrasena:'',
        nombre:'',
        apellido:'',
        cedula:'',
        direccion:'',
        telefono:''
        }
    }
    function registroError(error){
        console.log(error);
    }
});






 