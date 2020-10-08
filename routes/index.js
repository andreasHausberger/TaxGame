var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Trying to render index page");
  res.render('../public/pages/welcome.ejs', { siteTitle: 'Welcome' });
});

module.exports = router;
