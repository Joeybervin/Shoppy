var express = require('express');
var router = express.Router();
/* models */
let messageModel = require('../models/message')
let userModel = require('../models/user')
/* libraries */
const uid2 = require('uid2');

/* Create an account */
router.post('/sendMessage', async function(req, res, next) {
    const message = req.body

    let newMessage = new messageModel({
        firstName : message.firstName,
        lastName : message.LastName,
        email: message.email,
        has_an_account : message.has_an_account,
        order_id : message.order_id,
        subject : message.subject,
        title: message.title,
        message: message.message,
        insert_date : new Date(),
        message_id : uid2(10) ,
    })

    const messageSaved = await newMessage.save()

    if (messageSaved && message.has_an_account) { // if the message is saved and the user have a account we add it to the user document
            
        const updateWishlist = await userModel.updateOne({ email: message.email},
            { $addToSet : {
                messages: messageSaved._id
            } }
            )
        if (updateWishlist.modifiedCount === 1) {

            let userMessage = { // take only the informations you need
                order_id : messageSaved.order_id,
                subject : messageSaved.subject,
                title: messageSaved.title,
                message: messageSaved.message,
                insert_date : messageSaved.insert_date,
                message_id: messageSaved.message_id
            }
            return res.json({status : "success", message : userMessage})
        }
        
    }
    else if (messageSaved) {
        return res.json({status : "success"})
    }

    return res.json({status : "fail"})

});




module.exports = router;