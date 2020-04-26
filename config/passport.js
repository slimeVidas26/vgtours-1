const passport = require('passport')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./keys");
const chalk = require('chalk')
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

let user = {}

passport.serializeUser((user , done)=>{
  done(null , user)
})

passport.deserializeUser((user , done)=>{
  done(null , user)
})

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
  );

  
  //facebook strategy
passport.use(new FacebookStrategy({
  clientID : keys.FACEBOOK.clientID,
  clientSecret : keys.FACEBOOK.clientSecret,
  callbackURL : "/auth/facebook/redirect"
  } , 

  (accessToken , verifyToken , profile , done)=>{
    console.log(chalk.blue(JSON.stringify(profile)));
    console.log(accessToken)
    console.log(verifyToken)
    
    fuser = {...profile}
    return done(null , profile)
  }
  
  ))

  //google
  passport.use(new GoogleStrategy({
    clientID : keys.GOOGLE.clientID,
    clientSecret : keys.GOOGLE.clientSecret,
    callbackURL : "/auth/google/redirect"
    } , 
  
    (accessToken , verifyToken , profile , done)=>{
      console.log(chalk.blue(JSON.stringify(profile)));
      console.log(accessToken)
      console.log(verifyToken)
      
      user = {...profile}
      return done(null , profile)
    }
    
    ))

module.exports = passport