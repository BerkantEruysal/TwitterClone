const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const sessionToken = new Schema({
  value : {type : String , required : true},
  user : {type : Schema.Types.ObjectId , ref : "User" , required : true},
  expires : {type : Date , required : true},  
});


module.exports = mongoose.model("SessionToken" , sessionToken)