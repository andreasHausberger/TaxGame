let express = require('express');
let request = require('request');
let router = express.Router();
let mysql = require('mysql');
let config = require('../database/config');

/* GET test page. */
router.get('/', function(req, res, next) {
    console.log("Questionnaire site reached!");
    res.sendFile('/Users/andreas/Developer/Web/FlagPriming/public/sites/test.html');
});

// Posting form daty
router.post('/', function(req, res) {
    let data = req.body;
    console.log(data);
    delete data.submit;
    console.log("After deleting: ");
    console.log(data);

    insertTest(data, false);
    res.sendFile('/Users/andreas/Developer/Web/FlagPriming/public/sites/thanks.html');

});

function insertTest(data, isUpdate) {
    var sql = "";

    if (isUpdate) {

    }
    else {
        let con = mysql.createConnection(config);
        var values = Array();
        for (key in data) {
            console.log(key);
            let value = data[key];
            values.push(value);
        }
        let valueString =  "('" + values.join("', '") + "')";
        sql = "INSERT INTO results (age, gender, nationality, education) VALUES " + valueString;
        console.log(sql);
    }


    con.query(sql);
    con.end();

}


module.exports = router;
