angular.module('app.directives', [])
.factory('userFactory',function($resource)
{
         var recurso=$resource(
    'https://pizzauser-fercho1992.c9users.io/User/:id',{id:'@id'},
        
        {
            update:{
                method:'PUT'
            }
        }
    );
    return recurso;
})

.directive('blankDirective', [function(){

}]);

