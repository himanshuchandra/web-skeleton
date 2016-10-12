app.factory("regfactory",function($http,$q){
    //var data= {key,value};
    var userdata="nodata";

    var object = {
        registerUser:function(userObject){
          var defer = $q.defer(); $http.post('http://localhost:1234/register',userObject).then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        }
        ,
        passdata:function(finaldata){
            setdata(finaldata);//return finaldata;
        } 
        
        };
        
     setdata=function(finaldata){
         userdata=finaldata;
         console.log(userdata);
     }
     
     returndata=function(){
         return userdata;
     }

    return object;
    });