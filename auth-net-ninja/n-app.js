const express = require('express');

const authRoutes = require('./routes/auth-routes')

const app = express();

// set template engine
app.set('view engine' , "ejs")


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