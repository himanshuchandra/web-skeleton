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
        
        var emaddress=$scope.foremail;

        var codeObject = {
            "cemail":$scope.foremail,
        };
        var promise = forgotpassfactory.cUser(codeObject);
        promise.then(function(data){
            console.log("SUCCESS ",data);
            //var res = data.data.result;
            
            if(data.data.msg==="found")
            {
                //console.log(data.data.code);
            emailjs.send("gmail","forgotpass",{eaddress:emaddress, vercode:data.data.code});
            $scope.result="Verification code has been sent to your email";
             } 
            else{
            $scope.result=data.data.msg;
        }
          
        
        },function(error){
            $scope.result = "error occurred";
        });
    }
    
    
})