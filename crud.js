var express = require("express");
var app = express();
app.use(express.static('public'));

var bodyParser =require("body-parser");
// npm install body-parser --save
//app.use(express.static("public"));



//app.use(bodyParser());  // Express JS 3.x Support this
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register',function(request,response){
    var dbOperations = require("./crudoperation");
    var data =request.body;
    console.log("DATA is      ",data);
    dbOperations.checkUser(data,response);
    
    
    //dbOperations.addUser(data,response);
});

app.post('/login',function(request,response){
   
    var dbOperations = require("./crudoperation");
    var data =request.body;
    console.log("DATA is      ",data);
    dbOperations.doLogin(data,response);
    
    //return logintoken;
});

app.listen(1234,function(){
   console.log("Server Start...");
});
