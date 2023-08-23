const mongoose =require('mongoose')
const User = require("./userSchema")

const eventSchema = new mongoose.Schema({

    
  userId:{ 
    type : mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  EventName: String, 
  startDate:{
    datetime:Date
  }, 

  endDate:{
    datetime: Date
  }, 

  eventIdentifier: String
  // slots :[{
  //   allAvailableSlots :[

  //     {from :'09:00', to : '09:30'},
  //     { from: '09:30', to: '10:00' },
  //     { from: '10:00', to: '10:30' },
  //     { from: '10:30', to: '11:00' },]
  // }]
})




module.exports= mongoose.model('Event',eventSchema)