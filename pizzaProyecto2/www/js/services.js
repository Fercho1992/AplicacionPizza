//angular.module('app.services', [])
//
//.factory('BlankFactory', [function(){
//
//}])

angular.module('app.services',[])//Tomar en cuenta el Starter que esta en el app.js

.service('userFactory',function($resource){
    var recurso= $resource(
    'https://pizzauser-fercho1992.c9users.io/User/:id',{id:'@id'},
        
        {
            update:{
                method:'PUT'
            }
        }
    );
    return recurso;
})

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

