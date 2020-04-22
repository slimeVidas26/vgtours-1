const router = require('express').Router();

const authCheck  =(req , res , next)=>{
    if(!req.user){
      //if user is not logged in
      console.log('you are not logged')
      res.redirect('/auth/login')
    }else { 
     //if logged in
     next();   
 }
 }

router.get('/' ,authCheck ,  (req , res)=>{
//res.send("you are logged in to your profile page : " + req.user.username)
res.render('profile' , {user :req.user });
});

module.exports = router;