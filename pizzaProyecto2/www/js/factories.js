angular.module('starter.services',[])//Tomar en cuenta el Starter que esta en el app.js
.factory('userFactory',function($resource){
    var recurso= $resource(
    'https://pizzauser-fercho1992.c9users.io/User/:id',{id:'@id'},
        
        {
            update:{
                method:'PUT'
            }
        }
    );
    return recurso;
});