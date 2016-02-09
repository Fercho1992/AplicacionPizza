angular.module('app.services',[])//Tomar en cuenta el Starter que esta en el app.js

//angular.module('app.services', [])
//
//.factory('BlankFactory', [function(){
//
//}])

.factory('pizzaServer',function($resource){
    var recurso= $resource(
    'https://pizza-server-lenindhp.c9users.io/Usuario/:id',{id:'@id'},
        
        {
            update:{
                method:'PUT'
            }
        }
    );
    return recurso;
})


//.factory('userFactory',function($resource){
//    var recurso= $resource(
//    'https://pizza-server-lenindhp.c9users.io/Detallepizza/:id',{id:'@id'},
//        
//        {
//            update:{
//                method:'PUT'
//            }
//        }
//    );
//    return recurso;
//})

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'admin' && pw == 'admin') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})





.service('BlankService', [function(){

}]);

