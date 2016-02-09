angular.module('app.controllers', ['ionic'])

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

  .controller('ingredienteController', ['$scope','$http', function($scope, $http){
    $scope.ingr = {
      txtname: '',
      txtprecio: '',
      txtdescripcion: ''

    };

    io.socket.get('https://pizza-server-lenindhp.c9users.io/Ingredientes');


    $http({
      method: 'GET',
      url: 'https://pizza-server-lenindhp.c9users.io/Ingredientes'
    }).then(
      function (resp){
        $scope.ingredientes = resp.data;
      },
      function(err){
        console.log('error');
      })

    io.socket.on('ingredientes', function(objeto){
      console.log("El servidor responde");
      console.log(objeto);

      if(objeto.verb === 'created'){
        $scope.ingredientes.push(objeto.data);
        $scope.$digest();
      }

    })


    $scope.llamar = function(){
      console.log('envio datos');
      console.log($scope.ingr.txtname);

      io.socket.post('https://pizza-server-lenindhp.c9users.io/Ingredientes/conversacion',
                     {name: $scope.ingr.txtname, precio: $scope.ingr.txtprecio, descripcion: $scope.ingr.txtdescripcion});
      $scope.ingr.txtname="";
      $scope.ingr.txtprecio="";
      $scope.ingr.txtdescripcion="";

    }



  }])
    



.controller('listUserCtrl', function($scope,pizzaServer) {
    
     console.log('controlador userio');
    
   $scope.listarUser=function(){
     console.log("listar"); pizzaServer.query().$promise.then(listaok,listaerror);//haciendo un consulta  
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

   
.controller('updateUserCtrl',function($scope, $stateParams, pizzaServer){
    console.log("Actualizar");
    $scope.parametro=$stateParams.userid;
    
    pizzaServer.get({
        id:$scope.parametro
    }).$promise.then(updateOk,updateError);
    
    
    function updateOk(user){
        $scope.user=user;
    }
    function updateError(error){
        console.log(error);
    }
    
    $scope.actualizarUser=function(){
       pizzaServer.update({
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

.controller('createUserCtrl', function($scope,pizzaServer) {
    console.log("Registro");
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
          console.log("Registro User");
        pizzaServer.save({
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
        console.log("Registar Ok");
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
})

//Pizza

.controller('listPizzaCtrl', function($scope,pizzaServer) {
    
     console.log('controlador pizza');
    
   $scope.listarPizza=function(){
     console.log("listar"); pizzaServer.query().$promise.then(listaok,listaerror);//haciendo un consulta  
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










 