var express = require('express');
var router = express.Router();
/* model */
let userModel = require('../models/user')
/* libraries */
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

const passwordHashRound = 10;

const sendUserInfos = (data, res) => {

    let userInfos = {

        email: data.email,
        firstName : data.firstName,
        lastName : data.lastName,
        address : data.address,
        city : data.city,
        insert_date : data.insert_date,
        token : data.token
    }
    

    res.json({connection : true , userInfos })

}

/* Connection to an account */
router.post('/signUp', async function(req, res, next) {

    const userInfos = req.body

    /* Look if the user is already in the database : true || false */
    const databaseAccountsList = await userModel.findOne({ email: userInfos.email });

    /* hash the password : string of 32 characters */
    const hash = bcrypt.hashSync(userInfos.password, passwordHashRound);

    /* backend check if any typos get is way thought here */
    if (!databaseAccountsList && userInfos.email !== "" && userInfos.password !== "" && userInfos.firstName !== "" && userInfos.lastName !== "") {
        
        var newUser = new userModel({
            email: userInfos.email,
            password: hash,
            firstName : userInfos.firstName,
            lastName : userInfos.lastName,
            address : userInfos.address,
            city : userInfos.city,
            wishlist : [],
            orders : [] ,
            insert_date : new Date(),
            token : uid2(32)
        })

        /* save the new account in the database */
        await newUser.save()

        /* send back only not sensitive informatiosn */
        sendUserInfos(newUser, res)
        
    }
    /* if the account is found in the database */
    else if (databaseAccountsList) {
        res.json({hasAnAccount : true })
    }
    /* if a typo were find */
    else {
        res.json({error : true })
    }
    
    

});

/* Create an account */
router.post('/signIn', async function(req, res, next) {

    const email = req.body.email
    const password = req.body.password


    //... fetch user from a db etc.
    const databaseUser = await userModel.findOne({ email: email})

    if (databaseUser) { // if the email is found in the database

        const passwordMatch = await bcrypt.compare(password, databaseUser.password);

        if (passwordMatch) { // the user were found
            sendUserInfos(databaseUser, res)
        }
        else { // user were found but the password doesn't match

            res.json({error: 'password'})
        }

    }
    else { // the user wasn't found
        res.json({error: 'email'})
    }

});

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
