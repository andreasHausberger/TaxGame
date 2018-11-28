var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Trying to render index page");
  res.render('../public/generated/welcome.ejs', { title: 'Express' });
});

module.exports = router;
