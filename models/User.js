const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   username : {
     type :String ,
     required:true ,
     unique : true ,
   },
    email : String,
    password:{
      type : String,
      required:true ,
    },
});
module.exports = new mongoose.model("User",userSchema);