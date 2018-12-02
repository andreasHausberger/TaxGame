var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log("Thanks site reached!");
    res.render('../public/generated/thanks.ejs');
});

module.exports = router;