const passport = require('passport')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook')
const chalk = require('chalk');
const mongoose = require("mongoose");
const User = mongoose.model("users");
//const GoogleUser = mongoose.model("googleUsers")//require('../models/googleUser')
const googleUser = require('../models/google-user-model');
const keys = require("./keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

let facebookUser = {}

//console.log(opts)



passport.serializeUser((user , done)=>{
  done(null , user.id)
});

passport.deserializeUser((id , done)=>{
googleUser.findById(id).then((user)=>{
done(null , user)
})
});

      //login with form
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
  ) 

//login with google
  passport.use(
    new GoogleStrategy({
      // options for google strategy
      callbackURL:'/auth/google/redirect',
      clientID :keys.GOOGLE.clientID,
      clientSecret : keys.GOOGLE.clientSecret
  }, (accessToken , refreshToken , profile , done) => {
      // passport callback function
       console.log("passport callback function fired")
       console.log(profile);

      googleUser.findOne({
        googleID : profile.id
      }).then((currentGoogleUser)=>{
        if(currentGoogleUser){
          //already have the user
         console.log("google user is" + currentGoogleUser);
         done(null , currentGoogleUser);
        }
        else{
          //if not , create new user
          new googleUser({
            username:profile.displayName,
            googleID : profile.id,
            thumbnail : profile._json.picture
          }).save().then((newGoogleUser)=>{
            console.log("new google user created : " + newGoogleUser);
            done(null , newGoogleUser);
          })
        }
      }) 
  })
  ) 

  //login with facebook
  passport.use(
    new FacebookStrategy({
      // options for google strategy
      callbackURL:'/auth/facebook/callback',
      clientID :keys.FACEBOOK.clientID,
      clientSecret : keys.FACEBOOK.clientSecret
  }, (accessToken , refreshToken , profile , done) => {
      // passport callback function
       console.log(chalk.blue(JSON.stringify(profile)))
       facebookUser = {...profile}

      // facebookUser.findOne({
      //   facebookID : profile.id
      // }).then((currentFacebookUser)=>{
      //   if(currentFacebookUser){
      //     //already have the facebook user
      //    console.log("facebook user is" + currentFacebookUser);
      //    done(null , currentFacebookUser);
      //   }
      //   else{
      //     //if not , create new facebook user
      //     new facebookUser({
      //       username:profile.displayName,
      //       facebookID : profile.id,
      //       thumbnail : profile._json.picture
      //     }).save().then((newFacebookUser)=>{
      //       console.log("new facebook user created : " + newFacebookUser);
      //       done(null , newFacebookUser);
      //     })
      //   }
      // }) 
  })
  ) 

module.exports = passport;
