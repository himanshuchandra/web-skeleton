app.controller("profilectrl",function($scope,profilefactory,regfactory){
   var cccc=regfactory.userdata;
   console.log(cccc);
     $scope.printd=cccc;
});