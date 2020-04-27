const passport = require('passport')
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;


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

//jwt startegy
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
    user = {...profile}
    return done(null , profile)
  }
  
  ))

  //google strategy
  passport.use(new GoogleStrategy({
    clientID : keys.GOOGLE.clientID,
    clientSecret : keys.GOOGLE.clientSecret,
    callbackURL : "/auth/google/redirect"
    } , 
    (accessToken , verifyToken , profile , done)=>{
      console.log(chalk.red(JSON.stringify(profile)));
      user = {...profile}
      return done(null , profile)
    }
    
    ));

    //amazon strategy
  // passport.use(new AmazonStrategy({
  //   clientID : keys.AMAZON.clientID,
  //   clientSecret : keys.AMAZON.clientSecret,
  //   callbackURL : "/auth/amazon/redirect"
  //   } , 
  //   (accessToken , verifyToken , profile , done)=>{
  //     console.log(chalk.red(JSON.stringify(profile)));
  //     user = {...profile}
  //     return done(null , profile)
  //   }
  //   ));

     //github strategy
  passport.use(new GithubStrategy({
    clientID : keys.GITHUB.clientID,
    clientSecret : keys.GITHUB.clientSecret,
    callbackURL : "/auth/github/redirect"
    } , 
    (accessToken , verifyToken , profile , done)=>{
      console.log(chalk.red(JSON.stringify(profile)));
      user = {...profile}
      return done(null , profile)
    }
    
    ));

        //instagram strategy
  // passport.use(new InstagramStrategy({
  //   clientID : keys.INSTAGRAM.clientID,
  //   clientSecret : keys.INSTAGRAM.clientSecret,
  //   callbackURL : "/auth/instagram/redirect"
  //   } , 
  //   (accessToken , verifyToken , profile , done)=>{
  //     console.log(chalk.red(JSON.stringify(profile)));
  //     user = {...profile}
  //     return done(null , profile)
  //   }
  //   ));

  //spotify strategy
  passport.use(new SpotifyStrategy({
    clientID : keys.SPOTIFY.clientID,
    clientSecret : keys.SPOTIFY.clientSecret,
    callbackURL : "/auth/spotify/redirect"
    } , 
    (accessToken , verifyToken , profile , done)=>{
      console.log(chalk.red(JSON.stringify(profile)));
      user = {...profile}
      return done(null , profile)
    }
    
    ));

    //twitter strategy
  // passport.use(new TwitterStrategy({
  //   clientID : keys.TWITTER.clientID,
  //   clientSecret : keys.TWITTER.clientSecret,
  //   callbackURL : "/auth/twitter/redirect"
  //   } , 
  //   (accessToken , verifyToken , profile , done)=>{
  //     console.log(chalk.red(JSON.stringify(profile)));
  //     user = {...profile}
  //     return done(null , profile)
  //   }
    
  //   ));

    


module.exports = passport