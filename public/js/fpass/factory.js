app.factory("forgotpassfactory",function($http,$q){
    //var data= {key,value};
    var object = {
        cUser:function(codeObject){
            
          var defer = $q.defer(); $http.post('http://localhost:1234/fpass',codeObject).then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        }
        
        };
    return object;
    });