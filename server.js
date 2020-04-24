const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const authRoutes = require("./routes/api/auth-routes");
const profileRoutes = require("./routes/api/profile-routes");

const passportSetup = require('./config/passport-setup')
const keys = require('./config/keys')
const cookieSession = require('cookie-session');
const app = express();


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(cookieSession({
  maxAge : 24*60*60*1000,
  keys : [keys.session.cookieKey]
}))

// set template engine
//app.set('view engine' , "ejs");

//initialize passport
app.use(cors())
app.use(passport.initialize());
app.use(passport.session());

// DB Config
const db = require("./config/keys").mongoURI;
//console.log("db" , db)
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport-setup");
// Routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes); //route/api/profile-route

//route 
// app.get('/' , (req , res)=>{
//   res.render('home' , {user : req.user})
//   });


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));