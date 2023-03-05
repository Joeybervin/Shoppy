const mongoose = require('mongoose');

var couponSchema = mongoose.Schema({
    exp : Date,
    name : String,
    amount : Number,
})

module.exports = mongoose.model('coupons', couponSchema)