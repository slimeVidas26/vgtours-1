const router = require('express').Router();


const authCheck  =(req , res , next)=>{
   if(!req.user){
     //if user is not logged in
     console.log('you are not logged')
     res.redirect('/api/users/login')
   }else { 
    //if logged in
    next();   
}

}

router.get('/' , authCheck , (req  ,  res)=>{
    //console.log(req)
    res.send('you are logged in , this is your profile : '+ req.user.username)

})




module.exports = router;