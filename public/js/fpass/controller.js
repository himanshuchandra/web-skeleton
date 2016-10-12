app.controller("forgotpassctrl",function($scope,forgotpassfactory){
   
   (function(){
      emailjs.init("My user id");
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
            
            if(data.data.msg==="found")
            {

            $scope.result=data.data.msg;
            var eaddresss=data.data.finaldata[0].useremail;
            var code=7889;
            emailjs.send("gmail","forgotpass",{eaddress: eaddresss, tttt:code});
            
        } 
        else{
            $scope.result=data.data.msg;
        }
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