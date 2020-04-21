const express = require('express');
const authRoutes = require('./routes/auth-routes')
const app = express();
const passportSetup  = require('./config/passport-setup')
const mongoose = require('mongoose');
const keys = require('./config/keys')

// set template engine
app.set('view engine' , "ejs")

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


//route 
app.get('/' , (req , res)=>{
res.render('home')
});

//set up auth routes
app.use('/auth' , authRoutes)

const PORT = process.env.PORT || 3000
app.listen(3000 , ()=>{
    console.log(`Listening on port ${PORT}`)
})