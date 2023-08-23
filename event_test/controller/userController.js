const mongoose = require("mongoose")
const userdb = require("../models/userSchema")



const UserData = (req, res,next) => {


    try {

        new userdb({

            googleId: req.body.googleId,
            name: req.body.name,
            email: req.body.email,
            identifier: req.body.identifier,
        }).save()

            .then(result => {

                res.status(200).json({
                    message: "user saved",
                    useris: result,
                })
            })

            .catch(error => {
                console.log("could not save the user in DB", error)
            })
    }
        
     catch (error) {

    res.status(500).json({

        message: "cant create the user in DB"
    })

}


    
}


module.exports ={UserData}
