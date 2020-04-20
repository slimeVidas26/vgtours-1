const router = require('express').Router();



//login route
router.get('/login' , (req , res)=>{
res.render('login')
})


//logout route
router.get('/logout' , (req , res)=>{
res.send('logging out')
})

//google route
router.get('/google' , (req , res)=>{
    //handled with passport
 res.send("login with google")
})

module.exports = router;