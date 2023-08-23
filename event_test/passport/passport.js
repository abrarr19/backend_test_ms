
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const user= require('../models/userSchema')


const passport=passport.use(new GoogleStrategy({

    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:"/auth/google/callback"
}, 

(accessToken, refreshToken, profile, done)=>{

  user.findOne({
    googleId:profile.id
  })
  .then((existingUser)=>{

    if(existingUser){
    done(null,existingUser)

    }

    else{

        const newuser= new user({
            googleId:profile.id, 
            name:profile.displayName, 
            email :profile.email[0].value,
        })

        newuser.save()
        .then((saveduser)=>{
            done(null,saveduser)
        })
        .catch((err)=>{

            console.log("user was not saved")
            console.log(err)
            

        })
    }
  })
  
}



))

passport.serializeUser((user, done) => {
    done(null, user);
  });


  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  
module.exports= passport;