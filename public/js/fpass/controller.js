app.controller("forgotpassctrl",function($scope,forgotpassfactory){
   
   (function(){
      emailjs.init("user_x4eg1lcRk0aADgMwe3gB6");
   })();


     $scope.submitForm=function(forpass){
           // console.log(regForm.$valid);
                if(forpass.$valid){
                    $scope.sendCode();
                }
                
            }
    
    
    $scope.sendCode=function(){
        
        var codeObject = {
            "cemail":$scope.foremail,
        };
        var promise = forgotpassfactory.cUser(codeObject);
        promise.then(function(data){
            console.log("SUCCESS ",data);
            //var res = data.data.result;
            $scope.result=data.data.msg;
            var eaddresss=data.data.finaldata[0].useremail;
            emailjs.send("gmail","forgotpass",{eaddress: eaddresss, tttt: "i got it!"});
            
            //var token;
            /*
            if(res.length<1){
            console.log("nodata");
            $scope.result="Wrong email or password";
                    }
                else{
                
                }
            
            */
           // $scope.result=data.data.msg;
            
        
        },function(error){
            $scope.result = "error occurred";
        });
    }
    
    
})