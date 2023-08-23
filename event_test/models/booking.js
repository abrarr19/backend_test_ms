const mongoose =require('mongoose')
const Event = require('./eventSchema')

const bookingSchema = new mongoose.Schema({


    eventid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Event
    },
    summary :String, 
    description: String,
    start :{

          type: Date, 
          required: true,
    }, 
   
    end:{
        
        type: Date, 
          required: true,

    }, 

    conferenceData: Number,

    attendees:[{
        email : String
    }
    ]

})


module.exports= mongoose.model('booking',bookingSchema)