app.controller("forgotpassctrl",function($scope,forgotpassfactory){
   
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