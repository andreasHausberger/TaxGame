let express = require('express');
let request = require('request');
let router = express.Router();
let mongodb = require('mongodb');
let user = require('../database/mdb');

/* Get login page */

router.get('/', function (req, res, next) {
    console.log("Login site reached!");
    res.render('../public/generated/login.ejs', {siteTitle: "Login"});
});


/* Post login data */
router.post('/', function(req, res, next) {
    let data = req.body;
    console.log("reached post site for login" );
    console.log("user: " + data.username);

    if (data.username && data.password) {
        user.authenticate(data.username, data.password, function(error, user) {
           if (error || !user) {
               var err = new Error('Fehler bei der Eingabe des Usernamens.');
               err.status = 401;
               res.redirect('/fail');
               return next(err);
           }
           else {
               req.session.userId = user._id;
               return res.redirect('/test');
           }
        });
    }

});

module.exports = router;
