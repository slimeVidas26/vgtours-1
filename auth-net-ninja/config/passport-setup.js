const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const googleUser = require('../models/google-user-model')

passport.serializeUser((user , done)=>{
    done(null , user.id)
});

passport.deserializeUser((id , done)=>{
googleUser.findById(id).then((user)=>{
 done(null , user)
})
});

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

     googleUser.findOne({
         googleID : profile.id
     }).then((currentGoogleUser)=>{
        if(currentGoogleUser){
             //already have the user
         console.log("google user is" + currentGoogleUser)
         done(null , currentGoogleUser);

        }else{
              //if not , create new user
            new googleUser({
                username : profile.displayName,
                googleID : profile.id
            }).save().then((newGoogleUser)=>{
                console.log("New user created "  + newGoogleUser)
                done(null , newGoogleUser);
            })
        }
     })
    
    })
)