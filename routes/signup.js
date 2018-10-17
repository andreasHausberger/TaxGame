let express = require('express');
let request = require('request');
let router = express.Router();
let mongodb = require('mongodb');
let user = require('../database/mdb');
let config = require('../config/config');

/* Get signup page */

router.get('/', function (req, res, next) {
    console.log("Signup site reached!");
    res.render('../public/generated/signup.ejs', {config: config});
});


/* Post signup data */
router.post('/', function(req, res, next) {
    let data = req.body;
    console.log("reached post site for signup" );
    console.log("user: " + data.username + " " + data.email);

    if (data.username && data.password) {
        let userData = {
            username: data.username,
            email: data.email,
            password: data.password,
            passwordConf: data.password
        }

        user.create(userData, function(err, user) {
            if (err) {
                return next(err);
            }
            else {
                console.log("successfully registered " + user.username)
                return res.redirect('/login');
            }
        });
    }
});

module.exports = router;
