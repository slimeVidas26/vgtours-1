const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const googleUser = require('../models/google-user-model')

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
     console.log("pass cb func fired")
     new googleUser({
         username : profile.displayName,
         googleID : profile.id
     }).save().then((newGoogleUser)=>{
         console.log("New user created "  + newGoogleUser)
     })
    })
)