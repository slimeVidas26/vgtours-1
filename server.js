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

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const requireJsonContent = () => {
  return (req, res, next) => {
    if (req.header('Authorization') !== '123456') {
        res.status(400).send('incorrect token')
    } else {
      next()
    }
  }
}



app.get('/logon', (req, res, next) => {
  res.send('Welcome Home');
});

app.post('/logon',requireJsonContent(), (req, res, next) => {
  res.send('You are logged');
})
//home route
app.get('/', (req , res)=>{
  
  res.send({
    cookie : req.header("cookie"),
    UserAgent : req.header("user-agent"),
    Host : req.header("host"),
    Connection : req.header("connection"),
    Method : req.method,
    tUrl : req.url,
    Code : res.statusCode,
    remoteAdress : req.connection.remoteAddress,
    rawHeaders : req.rawHeaders, 
  })
  })

  app.post('/contact/:id' , (req , res)=>{
    //res.send("you are at http://localhost:5000")
    //res.send(req.header("cookie"))
    //res.send(req.header("content-type"))
    if(!req.body.name){
      res.status(400).send("Name is required")
    }
    else { 
       res.status(201).send("Thank you " + req.body.name)
    }
    })

    app.post('/logan' , (req , res)=>{
      //if no token
      if(!req.header("Authorization")){
        return res.status(400).send("no token")
      }
      if(req.header("Authorization") !== "123456"){
        return res.status(401).send("invalid token")


      }
      
         res.write(req.header("Authorization"));
         res.end("  logged")

      
    })

//twitter startegy session
app.use(session({ secret: 'TWITTER_SECRET' }));



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