let express = require('express');
let request = require('request');
let router = express.Router();
let mongodb = require('mongodb');
let config = require('../database/mdb');

/* Get login page */

router.get('/', function (req, res, next) {
    console.log("Login site reached!");
    res.sendFile('/Users/andreas/Developer/Web/FlagPrimingNew/public/sites/login.html');
});


/* Post login data */
router.post('/', function(req, res) {
    console.log(req.body);
})

module.exports = router;
