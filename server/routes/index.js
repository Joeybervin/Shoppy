var express = require('express');
var router = express.Router();
/* model */
let userModel = require('../models/user')
/* libraries */
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

const passwordHashRound = 10;

/* Connection to a account */
router.post('/signUp', async function(req, res, next) {

    const userInfos = req.body

    /* Look if the user is already in the database : true || false */
    let databaseAccountsList = await userModel.findOne({ email: userInfos.email });

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
        let saveduserInfos = {
            email: newUser.email,
            firstName : newUser.firstName,
            lastName : newUser.lastName,
            address : newUser.address,
            city : newUser.city,
            insert_date : newUser.insert_date,
            token : newUser.token
        }
        console.log(saveduserInfos)
        res.json({userSaved : true, saveduserInfos })
        
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

/* Create a account */
router.post('/signIn', async function(req, res, next) {

    const email = req.body.signInEmail
    const password = req.body.signInPassword

    async (username, password) => {
        //... fetch user from a db etc.
    
        const match = await bcrypt.compare(password, user.passwordHash);
    
        if(match) {
            //login
        }
        else {

        }
    
        //...
    }
    
});

module.exports = router;
