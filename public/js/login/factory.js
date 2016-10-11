app.factory("loginfactory",function($http,$q){
    //var data= {key,value};
    var object = {
        loginUser:function(loginObject){
            
          var defer = $q.defer(); $http.post('http://localhost:1234/login',loginObject).then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        }
        
        };
    return object;
    });