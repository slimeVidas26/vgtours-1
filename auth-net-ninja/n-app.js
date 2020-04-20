const express = require('express');
const ejs = require('ejs')
const app = express();

// set template engine
app.set('view engine' , "ejs")


//route 
app.use('/' , (req , res)=>{
res.render('home')
});

const PORT = process.env.PORT || 3000
app.listen(3000 , ()=>{
    console.log(`Listening on port ${PORT}`)
})