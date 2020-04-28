const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require('passport')
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });


  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.firstName
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
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  //facebook

  router.get('/facebook',
  passport.authenticate('facebook')
);

router.get("/facebook/redirect" , passport.authenticate("facebook") , 
(req , res)=>{
  //res.redirect("/profile")
  res.send("you reach the cb url")
})

//google route
router.get('/google',
  passport.authenticate('google',  { scope: ['profile'] }));

router.get("/google/redirect" , passport.authenticate("google") , 
(req , res)=>{
//res.redirect("/profile")
res.send(req.user)
})



//github route
router.get('/github',
  passport.authenticate('github', { scope: ['profile'] }));

router.get("/github/redirect" , passport.authenticate("github") , 
(req , res)=>{
//res.redirect("/profile")
res.send(req.user)
})

//amazon route
router.get('/amazon',
  passport.authenticate('amazon',  { scope: ['profile'] }));

router.get("/amazon/redirect" , passport.authenticate("amazon") , 
(req , res)=>{
//res.redirect("/profile")
res.send(req.user)
})

//instagram route
router.get('/instagram',
  passport.authenticate('instagram'));

router.get("/instagram/redirect" , passport.authenticate("instagram") , 
(req , res)=>{
//res.redirect("/profile")
res.send(req.user)
})

//spotify route
router.get('/spotify',
  passport.authenticate('spotify'));

router.get("/spotify/redirect" , passport.authenticate("spotify") , 
(req , res)=>{
//res.redirect("/profile")
res.send(req.user)
})

//twitter route
router.get('/twitter',
  passport.authenticate('twitter'));

router.get("/twitter/redirect" , passport.authenticate("twitter", { scope: ['profile'] }) , 
(req , res)=>{
//res.redirect("/profile")
res.send(req.user)
})

// auth logout
router.get('/logout', (req, res) => {
  console.log("logging out");
  user = {}
  req.logout();
  res.redirect('/');
});

router.get("/user" , (req , res)=>{
  console.log("getting user data")
  res.send(user)

})


  module.exports = router;