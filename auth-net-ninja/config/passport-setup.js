const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys')

passport.use(
    new GoogleStrategy({
    //options for the google strategy
    callbackURL:'/auth/google/redirect',
    clientID :keys.GOOGLE.clientID,
    clientSecret : keys.GOOGLE.clientSecret
    } ,
     (accessToken , refreshToken , profile , done)=>{
     //passport callback fuction
     console.log(profile)
     //console.log("pass cb func fired")
    })
)