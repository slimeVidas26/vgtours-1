const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const googleUserSchema = new Schema({
    username : String,
    googleID : String

});

const googleUser = mongoose.model("google-user" , googleUserSchema)
module.exports = googleUser;