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

router.get('/', function(req, res) {
    res.send("Welcome to Shoppy")
});

/* Connection to an account */
router.post('/signUp', async function(req, res, next) {

    const userInfos = req.body;
    const databaseAccountsList = await userModel.findOne({ email: userInfos.email });
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
        
        await newUser.save()
        sendUserInfos(newUser, res)

    } else if (databaseAccountsList) {
        res.json({hasAnAccount : true })
    } else {
        res.json({error : true })
    }
});

/* Create an account */
router.post('/signIn', async function(req, res, next) {

    const email = req.body.email;
    const password = req.body.password;
    const databaseUser = await userModel.findOne({ email: email}).populate("messages");

    if (databaseUser) { // if the email is found in the database
        const passwordMatch = await bcrypt.compare(password, databaseUser.password);
        if (passwordMatch) { // the user were found
            sendUserInfos(databaseUser, res)
        } else { // user were found but the password doesn't match
            res.json({error: 'password'})
        }
    } else { // the user wasn't found
        res.json({error: 'email'})
    }
});

module.exports = router;
