const mongoose = require('mongoose');

var messagesSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email: String,
    has_an_account : Boolean,
    order_id : String,
    subject : String,
    title: String,
    message: String,
    insert_date : Date,
    token : String,
    message_id : String,
})

module.exports = mongoose.model('messages', messagesSchema)