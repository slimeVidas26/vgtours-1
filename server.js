const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRoutes = require("./routes/api/auth-routes");
const passport_setup = require("./config/passport")
//twitter
var session = require('express-session');


const app = express();

//twitter startegy session
app.use(session({ secret: 'TWITTER_SECRET' }));


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
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
//require("./config/passport")(passport);
// Routes
app.use("/auth", authRoutes);





app.use(cors())
app.use(passport.initialize())


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));