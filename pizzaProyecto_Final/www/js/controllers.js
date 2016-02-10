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

//Controlador ingredientes extras

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
    
     console.log('controlador usuario');
    
   $scope.listarUser=function(){
     console.log("listar"); pizzaServer.query().$promise.then(listaok,listaerror);//haciendo un consulta  
    }
    
    $scope.eliminarUser = function(user, indice){
        pizzaServer.delete({id:user.id}).$promise.then(
            function(respuesta){
                $scope.users.splice(indice, 1);
                console.log("borrar");
            },
            function(error){
                console.log(error);
            });
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

// //Control de ingresos de usuarios
//
//.controller('createUserCtrl', function($scope,pizzaServer) {
//    console.log("Registro");
//    $scope.newUser={
//        usuario:'',
//        contrasena:'',
//        nombre:'',
//        apellido:'',
//        cedula:'',
//        direccion:'',
//        telefono:''
//    }
//    
//    $scope.registrarNewUser=function(){
//          console.log("Registro User");
//        pizzaServer.save({
//        //datos del ng-model
//        usuario:$scope.newUser.usuario,
//        contrasena:$scope.newUser.contrasena,
//        nombre:$scope.newUser.nombre,
//        apellido:$scope.newUser.apellido,
//        cedula:$scope.newUser.cedula,
//        direccion:$scope.newUser.direccion,
//        telefono:$scope.newUser.telefono
//        }).$promise.then(registroOk, registroError);
//    }
//    function registroOk(data){
//        console.log("Registar Ok");
//        $scope.newUser={
//        usuario:'',
//        contrasena:'',
//        nombre:'',
//        apellido:'',
//        cedula:'',
//        direccion:'',
//        telefono:''
//        }
//    }
//    function registroError(error){
//        console.log(error);
//    }
//})

//Pizza

.controller('listPizzaCtrl', function($scope,pizzaServer) {
    
//     console.log('controlador pizza');
//    
//   $scope.listarPizza=function(){
//     console.log("listar"); pizzaServer.query().$promise.then(listaok,listaerror);//haciendo un consulta  
//    }
//    
//    
//    function listaok(listaPizza){
//        $scope.pizza=listaPizza;
//    }
//    function listaerror(error){
//        console.log(error);
//    }
//    
//    //llamando la funcion 
//    $scope.listarPizza();
})

//Controlador usuario

.controller('usuarioController', ['$scope','$http', function($scope, $http){
    $scope.user = {
      txtusuario: '',
      txtcontrasena: '',
      txtnombre: '',
        txtapellido: '',
        txtcedula: '',
        txtdireccion: '',
        txttelefono: ''

    };

    io.socket.get('https://pizza-server-lenindhp.c9users.io/Usuario');


    $http({
      method: 'GET',
      url: 'https://pizza-server-lenindhp.c9users.io/Usuario'
    }).then(
      function (resp){
        $scope.usuarios = resp.data;
      },
      function(err){
        console.log('error');
      })

    io.socket.on('usuarios', function(objeto){
      console.log("El servidor responde");
      console.log(objeto);

      if(objeto.verb === 'created'){
        $scope.usuarios.push(objeto.data);
        $scope.$digest();
      }

    })


    $scope.llamar = function(){
      console.log('envio datos');
      console.log($scope.user.txtusuario);

      io.socket.post('https://pizza-server-lenindhp.c9users.io/Usuario/conversacion',
                     {
          usuario: $scope.user.txtusuario, 
          contrasena: $scope.user.txtcontrasena, 
          nombre: $scope.user.txtnombre,
          apellido: $scope.user.txtapellido,
          cedula: $scope.user.txtcedula,
          direccion: $scope.user.txtdireccion,
          telefono: $scope.user.txttelefono,
          
      });
      $scope.user.txtusuario="";
      $scope.user.txtcontrasena="";
        $scope.user.txtnombre="";
        $scope.user.txtapellido="";
        $scope.user.txtcedula="";
        $scope.user.txtdireccion="";
      $scope.user.txttelefono="";

    }

  }])

 .controller('pizzaController', ['$scope','$http', function($scope, $http){
    $scope.pizz = {
      txtname: '',
      txtprecio: '',
      txttamano: '',
        txtcreada: '',
        txtdescripcion: ''

    };

    io.socket.get('https://pizza-server-lenindhp.c9users.io/Pizza');


    $http({
      method: 'GET',
      url: ' https://pizza-server-lenindhp.c9users.io/Pizza'
    }).then(
      function (resp){
        $scope.pizza = resp.data;
      },
      function(err){
        console.log('error');
      })

    io.socket.on('pizza', function(objeto){
      console.log("El servidor responde");
      console.log(objeto);

      if(objeto.verb === 'created'){
        $scope.pizza.push(objeto.data);
        $scope.$digest();
      }

    })


    $scope.llamar = function(){
      console.log('envio datos');
      console.log($scope.pizz.txtname);

      io.socket.post('https://pizza-server-lenindhp.c9users.io/Pizza/conversacion',
                     {
          name: $scope.pizz.txtname, 
        precio: $scope.pizz.txtprecio, 
        descripcion:$scope.pizz.txtdescripcion,
          tamano: $scope.pizz.txttamano,
          creada: $scope.pizz.txtcreada
      });
        
      $scope.pizz.txtname="";
      $scope.pizz.txtprecio="";
      $scope.pizz.txtdescripcion="";
        $scope.pizz.txttamano="";
        $scope.pizz.txtcreada="";
    }

  }])



 .controller('menuController', ['$scope','$http', function($scope, $http){
    $scope.men = {
      txtidpizza: '',
      txtidingrediente: ''

    };

    io.socket.get('https://pizza-server-lenindhp.c9users.io/Detallepizza');


    $http({
      method: 'GET',
      url: 'https://pizza-server-lenindhp.c9users.io/Detallepizza'
    }).then(
      function (resp){
        $scope.menus = resp.data;
      },
      function(err){
        console.log('error');
      })

    io.socket.on('menus', function(objeto){
      console.log("El servidor responde");
      console.log(objeto);

      if(objeto.verb === 'created'){
        $scope.menus.push(objeto.data);
        $scope.$digest();
      }

    })


    $scope.llamar = function(){
      console.log('envio datos');
      console.log($scope.men.txtname);

      io.socket.post('https://pizza-server-lenindhp.c9users.io/Detallepizza/conversacion',
                     {name: $scope.men.txtidpizza, 
                      precio: $scope.men.txtidingrediente
                     });
      $scope.men.txtidpizza="";
      $scope.men.txtidingrediente=""

    }



  }])



.controller('pedidoController', ['$scope', '$http', function($scope, $http){
    $scope.pedid = {
      txtformaPago: '',
      txtestado: '',
      txthoraAten: '',
        txttotal: '',

    };
    
    io.socket.get("https://pizza-server-lenindhp.c9users.io/Pedidos")
   
   $http({
       method: 'GET',
       url: 'https://pizza-server-lenindhp.c9users.io/Pedidos'
   }).then(
       function(resp){
           $scope.pedidos = resp.data;
       },
       function(err){
           console.log('error');
       })
       
    
    
    io.socket.on('pedidos', function(objeto){
           console.log("El servidor responde");
           console.log(objeto);
           
           if (objeto.verb === 'created') {
               $scope.pedidos.push(objeto.data);
               $scope.$digest();
           }

           if (objeto.verb === 'updated') {
            console.log("se modifica");
            console.log(objeto.data.id);
               $scope.pedidos.push(objeto.data);
               $scope.$digest();
           }
       })
    
    
    $scope.llamar = function(){
        console.log('envio datos');
        io.socket.post("https://pizza-server-lenindhp.c9users.io/Pedidos/conversacion",
        {
            formadepago: $scope.pedid.txtformaPago,
            estado: $scope.pedid.txtestado, 
             horaatencion: $scope.pedid.txthoraAten,
            totalpagar: $scope.pedid.txttotal,
            
        });
        
    
        $scope.pedid.txtformaPago="";
         $scope.pedid.txtestado="";
         $scope.pedid.txthoraAten="";
         $scope.pedid.txttotal="";

    }
      $scope.editarpedido = function(){
        console.log('modificar pedido');
        io.socket.post("https://pizza-server-lenindhp.c9users.io/Pedidos/edicion", {
            id: $scope.variable12});
        $scope.variable12="";
    }
}])



.controller('detalleController', ['$scope', '$http', function($scope, $http){
    $scope.det = {
      txtidingrediente: '',
      txtidpizza: ''
    };
    
    io.socket.get("https://pizza-server-lenindhp.c9users.io/Detallepizzas")
   
   $http({
       method: 'GET',
       url: 'https://pizza-server-lenindhp.c9users.io/Detallepizzas'
   }).then(
       function(resp){
           $scope.detallepizza = resp.data;
       },
       function(err){
           console.log('error');
       })
       
    
    
    io.socket.on('detallepizza', function(objeto){
           console.log("El servidor responde");
           console.log(objeto);
           
           if (objeto.verb === 'created') {
               $scope.detallepizza.push(objeto.data);
               $scope.$digest();
           }
       })
    
    
    $scope.llamarDetalle= function(){
        console.log('envio datos');
        io.socket.post("https://pizza-server-lenindhp.c9users.io/Detallepizzas/conversacion",
        {
            
            idpizza: $scope.det.txtidpizza, 
            idingrediente: $scope.det.txtidingrediente});
    
         $scope.det.txtidingrediente="";

    }
}])


.controller('detallePedidoUsuarioController', ['$scope', '$http', function($scope, $http){
    $scope.detPed = {
      txtidPedido: '',
      txtidUsuario: ''
    };
    
    io.socket.get("https://pizza-server-lenindhp.c9users.io/Detallepedidousuario")
   
   $http({
       method: 'GET',
       url: 'https://pizza-server-lenindhp.c9users.io/Detallepedidousuario'
   }).then(
       function(resp){
           $scope.detallepedidousuario = resp.data;
       },
       function(err){
           console.log('error');
       })
       
    
    
    io.socket.on('detallepedidousuario', function(objeto){
           console.log("El servidor responde");
           console.log(objeto);
           
           if (objeto.verb === 'created') {
               $scope.detallepedidousuario.push(objeto.data);
               $scope.$digest();
           }
       })
    
    
    $scope.llamardetPed = function(){
        console.log('envio datos');
        io.socket.post("https://pizza-server-lenindhp.c9users.io/Detallepedidousuario/conversacion",
        {
            idpedido: $scope.detPed.txtidPedido, 
            idusuario: $scope.detPed.txtidUsuario});
    
        $scope.detPed.txtidPedido="";
         $scope.detPed.txtidUsuario="";

    }
}])


.controller('detallePedidoController', ['$scope', '$http', function($scope, $http){
    $scope.detPedC = {
      txtidPedidoC: '',
      txtidPizzaC: ''
    };
    
    io.socket.get("https://pizza-server-lenindhp.c9users.io/Detallepedido")
   
   $http({
       method: 'GET',
       url: 'https://pizza-server-lenindhp.c9users.io/Detallepedido'
   }).then(
       function(resp){
           $scope.detallepedido = resp.data;
       },
       function(err){
           console.log('error');
       })
       
    
    
    io.socket.on('detallepedido', function(objeto){
           console.log("El servidor responde");
           console.log(objeto);
           
           if (objeto.verb === 'created') {
               $scope.detallepedido.push(objeto.data);
               $scope.$digest();
           }
       })
    
    
    
    $scope.llamarPedC = function(){
        console.log('envio datos');
        io.socket.post("https://pizza-server-lenindhp.c9users.io/Detallepedido/conversacion",
        {
            idpedido: $scope.detPedC.txtidPedidoC, 
            idpizza: $scope.detPedC.txtidPizzaC});
    
        $scope.detPedC.txtidPedidoC="";
         $scope.detPedC.txtidPizzaC="";

    }
}])






 