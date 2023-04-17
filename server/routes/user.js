var express = require('express');
var router = express.Router();
const uid2 = require('uid2')
/* model */
let userModel = require('../models/user')


const sendUserInfos = (data, res) => {

    let userMessages = data.messages
    let userMessagesInfos = [];

    userMessages.map((message) => {
        userMessagesInfos.push({
            order_id : message.order_id,
            subject : message.subject,
            title: message.title,
            message: message.message,
            insert_date : message.insert_date,
            message_id: message.message_id
        })
    })
    console.log("userMessagesInfos : ", userMessagesInfos)


    let userInfos = {

        email: data.email,
        firstName : data.firstName,
        lastName : data.lastName,
        address : data.address,
        city : data.city,
        wishlist : data.wishlist,
        orders : data.orders,
        insert_date : data.insert_date,
        messages : userMessagesInfos,
        token : data.token
    }
    

    res.json({connection : true , userInfos })

}

/* update an account */
router.put('/updateProfile', async function(req, res, next) {
    const userUpdatedData = req.body.formData ;
    const userEmail = req.body.userEmail

    await userModel.updateOne({ email: userEmail},
        { $set : {
            firstName : userUpdatedData.firstName,
            lastName : userUpdatedData.lastName,
            email : userUpdatedData.email,
            address : userUpdatedData.address,
            city : userUpdatedData.city
        } }
        )

    const updatedUser = await userModel.findOne({email: userUpdatedData.email})

    console.log("userUpdated : ", updatedUser);

    sendUserInfos(updatedUser, res)


});

router.put('/addToWishlist', async function(req, res, next) {
    let prductRef = req.body.productref
    let userEmail = req.body.email

    const updateWishlist = await userModel.updateOne({ email: userEmail},
        { $addToSet : {
            wishlist: prductRef
        } }
        )

    if (updateWishlist.modifiedCount === 1) {
        res.json({status : "success"})
    }
    else {
        res.json({status : "fail"})
    }

})

router.put('/removeFromWishlist', async function(req, res, next) {
    let prductRef = req.body.productref
    let userEmail = req.body.email

    const updateWishlist = await userModel.updateOne({ email: userEmail},
        { $pull : {
            wishlist: prductRef
        } }
        )

    if (updateWishlist.modifiedCount === 1) {
        res.json({status : "success"})
    }
    else {
        res.json({status : "fail"})
    }

})
router.put('/addAnOrder', async function(req, res, next) {
    let order = req.body.order;
    let userEmail = req.body.email;

    let savecOrder = { ...order, date : new Date(), id : uid2(16)}


    const orderListUpdate = await userModel.updateOne({ email: userEmail},
        { $addToSet : {
            orders: savecOrder
        } }
        )

    if (orderListUpdate.modifiedCount === 1) {
        res.json({order : savecOrder, status : "success"})
    }
    else {
        res.json({status : "fail"})
    }

})



module.exports = router;
