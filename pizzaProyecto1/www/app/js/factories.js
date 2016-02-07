angular.module('starter.services',[])//Tomar en cuenta el Starter que esta en el app.js
.factory('pizzaFactory',function($resource){
    var recurso= $resource(
    'https://pizza-fercho1992.c9users.io/Pizza/:id',{id:'@id'},
        {
            update:{
                method:'PUT'
            }
        }
    );
    return recurso;
});