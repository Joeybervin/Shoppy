require('dotenv').config();
const express = require('express');
const path = require('path');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var contactRouter = require('./routes/contact');


const app = express();

// port number used
const port = 3002 || process.env.PORT ;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// DATABASE connect
require("./bdd_connection")

// static files
app.use(express.static(path.join(__dirname, 'public/'))); 

// ROUTES
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/contact', contactRouter);

// errors
app.use((err, req, res, next) => {
    // headers error (sent 2 times)
    if (res.headersSent) {
        return next(err);
    }

    console.log("SERVER ERR ==> : ", err)
    res.status(500).send("500 server error");
})

// handle 404 error
app.get('*', function(req,res) {
    res.status(404).send("404 page not found");
})

app.listen(port, () => {
    console.log(`Shoppy API listening on port ${port}`)
})