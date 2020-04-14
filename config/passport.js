//  const passport = require('passport')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20')
const mongoose = require("mongoose");
const User = mongoose.model("users");
const GoogleUser = mongoose.model("googleUsers")//require('../models/googleUser')
const keys = require("./keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;




module.exports = passport => {

  passport.serializeUser((user , done)=>{
    done(null , user.id)
    });

    passport.deserializeUser((id , done)=>{
      GoogleUser.findById(id).then((user)=>{
        done(null , user)
      })
     
      });
  passport.use(

    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  ) , 
//google
  passport.use(
    new GoogleStrategy({
      // options for google strategy
      callbackURL:'/api/users/google/redirect',
      clientID :keys.google.clientID,
      clientSecret : keys.google.clientSecret
  }, (accessToken , refreshToken , profile , done) => {
      // passport callback function
      // console.log("passport callback function fired")
      // console.log(profile);

      //check if user already exists in our db
      GoogleUser.findOne({
        googleId : profile.id
      }).then((currentGoogleUser)=>{
          if(currentGoogleUser){
            //already have a user
            console.log("googleUser is :"+ currentGoogleUser);
            done(null , currentGoogleUser)
          }
          else{
            //if not create new user
            new GoogleUser({
              username :profile.displayName,
              googleId : profile.id
            }).save().then((newGoogleUser)=>{
              console.log('new google user created' + newGoogleUser);
              done(null , newGoogleUser);
            })
          }
      });
     
  })
  ) 

};
