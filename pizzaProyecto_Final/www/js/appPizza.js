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
        $scope.pizzaC = resp.data;
      },
      function(err){
        console.log('error');
      })

    io.socket.on('pizzaC', function(objeto){
      console.log("El servidor responde");
      console.log(objeto);

      if(objeto.verb === 'created'){
        $scope.pizzaC.push(objeto.data);
        $scope.$digest();
      }

    })


    $scope.llamar = function(){
      console.log('envio datos');
      console.log($scope.pizz.txtname);

      io.socket.post('https://pizza-server-lenindhp.c9users.io/Pizza/conversacionn',
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



  }]);