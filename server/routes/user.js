var express = require('express');
var router = express.Router();
/* model */
let userModel = require('../models/user')

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



module.exports = router;
