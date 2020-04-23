const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleUserSchema = new Schema({
    username: String,
    googleId : String,
    thumbnail : String,
    provider : String
});

//const googleUser = mongoose.model('googleUsers' , googleUserSchema);

// module.export = googleUser;
module.exports = GoogleUser = mongoose.model("googleUsers", googleUserSchema);