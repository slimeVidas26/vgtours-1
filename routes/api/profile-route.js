const router = require('express').Router();
const GoogleUser = require("../../models/GoogleUser");



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
    console.log('you are logged in , this is your profile : '+ req.user.username)

     
  const id = req.user.id;
    const username = req.user.username;
  // Find user by email
  GoogleUser.findOne({ id }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ usernotfound: "User not found" });
      }
      else{
 // Create JWT Payload
 const payload = {
  id: req.user.id,
  username: req.user.username
};

 // Sign token
 jwt.sign(
  payload,
  keys.secretOrKey,
  {
    expiresIn: 31556926 // 1 year in seconds
  },
  (err, token) => {
    res.json({
      success: true,
      token: "Bearer " + token
    });
  }
);
      }
 
      });
    });





module.exports = router;