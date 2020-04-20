const router = require('express').Router();
const passport = require('passport')



//login route
router.get('/login' , (req , res)=>{
res.render('login')
})


//logout route
router.get('/logout' , (req , res)=>{
res.send('logging out')
})

//google route
router.get('/google' ,passport.authenticate('google' , {
    scope : ['profile']
}) )

//callback route for google to redirect to
router.get('/google/redirect' ,(req , res)=>{
    res.send("You reach the cb URl")
})

module.exports = router;