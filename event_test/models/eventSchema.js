const mongoose =require('mongoose')

const eventSchema = new mongoose.Schema({

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


module.exports= mongoose.model('Event',eventSchema)