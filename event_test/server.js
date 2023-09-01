require("dotenv").config();
const cookieParser =require("cookie-parser")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session=require("express-session")
const flash= require("express-flash")
const User =require("./models/userModel")
// 


const db=require("./db/db")

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.engine("html", require("ejs").renderFile);
// app.use(express.static(__dirname + "/public"));

app.use(cookieParser());

app.use(session({

  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(flash())

app.get("/", (req, res) => {
  res.send("this is landing page")
});

app.get("/profile",(req,res)=>{
    res.send("profile saved")
})

//...
const passport = require("passport");

require("./passport/passport");
require("./passport/configuration")

//...

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    accessType: 'offline',
     approvalPrompt: 'force' ,
  }),

);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    // accessType: 'offline',
    //  approvalPrompt: 'force',
    failureRedirect: "/",
    successRedirect: "/profile",
    failureFlash: true,
    successFlash: "Successfully logged in!",
    
  })
);


app.get("/user/:identifier", async(req,res)=>{


  const userId= req.params.identifier;

  try {
    const user = await User.find({

      identifier:userId,})


      if(!user){

        console.log("no user found")
      }

      return res.json({
        result:"user",
        res:user
      })
    
  } catch (error) {
    console.log("cant get user",error)
  }

})





app.listen(5000, function () {
  console.log("SaaSBase Authentication Server listening on port 5000");
});
