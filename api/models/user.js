const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required : true, maxlength: 30, minlength: 5},
  password : {type : String , required : true},
  lastSeen: {type: Date},
  roles : {type : [String]}
});


module.exports = mongoose.model("User" , UserSchema)