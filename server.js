const express = require("express");
const app = express();
const cookieSession = require('cookie-session')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const authRoutes = require("./routes/api/auth-routes");
const passportSetup = require("./config/passport_setup")
//twitter
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const keys = require("./config/keys")





// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//twitter startegy session
// app.use(session({ secret: 'TWITTER_SECRET' }));
app.use(
  cookieSession({
    name : "session",
    keys : [keys.SESSION.COOKIE_KEY],
    maxAge : 24*60*60*100
  })
);

// parse cookies
app.use(cookieParser());

// Passport INITIALIZE
app.use(passport.initialize());

// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
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


  

// Routes
app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});






const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));