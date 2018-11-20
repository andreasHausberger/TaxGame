var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log("Fail site reached!");
    res.render('../public/generated/fail.ejs');
});

module.exports = router;