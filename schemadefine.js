// Step -3 Represent Schema
var mongoose = require("./connection");
var Schema = mongoose.Schema;
// Step -4  Creating Schema for the Collection
var userSchema= new Schema({useremail:  String,
  username: String,password1: String,mobile:Number,address: [{ area: String, city:String,state:String,pincode: Number,country:String }]
  });

var User = mongoose.model("userdatas",userSchema); 

module.exports=User;