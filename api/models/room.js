const mongoose = require('mongoose');

const calendarSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    title:String,
    description:String,
    address:String,
    price: String,
   

});


module.exports = mongoose.model('Room',calendarSchema) ;
    