app.controller("regctrl",function($scope,regfactory){
    
    $scope.passverified=false;
    
    $scope.checkp=function(){
        if($scope.password2!=undefined)
        {   
            if($scope.password1===$scope.password2)
            {   
                $scope.passtext="Passwords match";
                $scope.passverified=true;
                
                
            }
            else{
                $scope.passtext="Passwords dont match";
                $scope.passverified=false;
                
            }
        }
    }
    
        $scope.submitForm=function(regForm){
           // console.log(regForm.$valid);
                if(regForm.$valid && $scope.passverified==true){
                    $scope.doRegister();
                }
                
            }
       
   
    $scope.doRegister=function(){
        
        var userObject = {
            "useremail":$scope.useremail,
            "username":$scope.username,
            "password1":$scope.password1,
            /*"mobile":0,
            "address":[{"area":"null","city":"null","state":"null","pincode":0,"country":"null"}]*/
        };
        
      var promise = regfactory.registerUser(userObject);
        promise.then(function(data){
            console.log("SUCCESS ",data.data.msg);
            console.log(data.data.finaldata);
            $scope.result2 = data.data.finaldata;
            //$scope.profilename= data;
            $scope.result = data.data.msg;
           // window.location.assign("http://localhost:1234/profile.html");
            
            
            
        },function(error){
            $scope.result = "error occured";
        });
    }
})