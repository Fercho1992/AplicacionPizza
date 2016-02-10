// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
io.sails.url = "https://pizza-server-lenindhp.c9users.io/";
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



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



  }]);