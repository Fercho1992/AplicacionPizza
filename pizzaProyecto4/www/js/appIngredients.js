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



  }]);