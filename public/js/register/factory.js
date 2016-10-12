app.factory("regfactory",function($http,$q){
    //var data= {key,value};
    var userdata=[];

    var object = {
        mydata:"",

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
           this.userdata=finaldata;
           //setdata(finaldata);//return finaldata;
        } 
        
        };
        
     

    return object;
    });