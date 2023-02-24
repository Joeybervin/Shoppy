var express = require('express');
var router = express.Router();
/* model */
let userModel = require('../models/user')
/* libraries */
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

const passwordHashRound = 10;

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

/* Connection to an account */
router.post('/signUp', async function(req, res, next) {

    const userInfos = req.body

    /* Look if the user is already in the database : true || false */
    const databaseAccountsList = await userModel.findOne({ email: userInfos.email });

    /* hash the password : string of 32 characters */
    const hash = bcrypt.hashSync(userInfos.password, passwordHashRound);

    /* backend check if any typos get is way thought here */
    if (!databaseAccountsList && userInfos.email !== "" && userInfos.password !== "" && userInfos.firstName !== "" && userInfos.lastName !== "") {
        
        let newUser = new userModel({
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
    const databaseUser = await userModel.findOne({ email: email}).populate("messages")


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


module.exports = router;
