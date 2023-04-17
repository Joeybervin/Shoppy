const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName : String,
    lastName : String,
    address : String,
    city : String,
    wishlist : Array,
    orders : Array ,
    insert_date : Date,
    token: String,
    messages : [{type : mongoose.Schema.Types.ObjectId, ref: 'messages'}]

})

module.exports = mongoose.model('users', usersSchema)