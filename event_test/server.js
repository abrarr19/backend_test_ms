require("dotenv").config();
const cookieParser =require("cookie-parser")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session=require("express-session")
const flash= require("express-flash")
const User =require("./models/userModel")
const { googleapis, google } = require('googleapis')

const file= require("./Calenkey.json")
// 


const db=require("./db/db")

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.engine("html", require("ejs").renderFile);
// app.use(express.static(__dirname + "/public"));

// app.use(cookieParser());

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
const { calendar } = require("googleapis/build/src/apis/calendar");

require("./passport/passport");
require("./passport/configuration")

//...

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile","email","https://www.googleapis.com/auth/calendar.events"],
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

const auth = new google.auth.GoogleAuth({
  keyFile:'./Calenkey.json',
  scopes: ["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/calendar.events"],
});


const cal = google.calendar({
  version: "v3",
  auth :auth

})





app.post("/user/:identifier", async(req,res)=>{


  const userId= req.params.identifier;

  try {
    const user = await User.findOneAndUpdate({

      identifier:userId,})


      if(!user){

        console.log("no user found")
      }

     else{

      console.log(user.email)
        
      cal.events.insert(
        {
            calendarId: "primary",
             auth:auth,
            conferenceDataVersion: 1,
            sendNotifications:true,
            requestBody: {
                summary: req.body.summary,
                description: req.body.description,
                start: {
                  dateTime: req.body.start,
                  timeZone: 'GMT-03:00',
                },
                end: {
                  dateTime: req.body.end,
                  timeZone: 'GMT-03:00',
                },

                conferenceData: {
                    createRequest: {
                        requestId: "thisisrandomkey",
                    }
                },
        
                attendees:[{
                    email:req.body.attendees[0].email
                }]
            },
               
            
     })

     console.log("event created")

     res.send("event created")
    }
      
    
  } catch (error) {
    console.log("cant get user",error)
  }

})

//get token using refresh token 

app.post("/getValidToken", async (req, res) => {
  try {
    const request = await fetch("https://www.googleapis.com/oauth2/v4/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: req.body.refresh,
        grant_type: "refresh_token",
      }),
    });

    const data = await request.json();
    console.log("server 74 | data", data);

    res.json({
      accessToken: data.access_token,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});





app.listen(5000, function () {
  console.log("SaaSBase Authentication Server listening on port 5000");
});
