const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  provider : {
         type : String,
         required : false
  },
  googleId : {
          type :String,
          required : false
  },
  facebookId : {
    type :String,
    required : false
},
  firstName : {
         type: String,
         required : true
     },
     lastName : {
      type: String,
      required : true
  },
  thumbnail : {
        type:String,
        required : false
  },
  locale : {
    type : String,
    required : false
  },
     email : {
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }

});

module.exports = User = mongoose.model("users", UserSchema);