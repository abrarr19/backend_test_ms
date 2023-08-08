const app=require('express')()
const connectdb=require('./db/db')
const googlePassport = require("./routes/googleLogin")
const passport =require("passport")



app.get("/auth/google",(req, res)=>{
 
    passport.authenticate('google',{scope :['profile', 'email']})

})

app.get('/auth/google/callback', (req, res)=>{

    passport.authenticate('google', { failureRedirect: '/' }),
  
    res.redirect('/');
    console.log("user created ")
  }
);
app.get("/",(req, res)=>{

    res.send("this app is working at homepage")


    console.log("the app is working and up")
})


app.listen(5000, ()=>{

    console.log("server is running")
})