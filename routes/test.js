let express = require('express');
let request = require('request');
let router = express.Router();
let mysql = require('mysql');
let config = require('../database/config');
let user = require('../database/mdb');
let questionnaire = require('../database/questionnaireDB');

/* GET test page. */
router.get('/', function(req, res, next) {
    user.findById(req.session.userId).exec(function(error, user) {
       if (error) {
           return next(error);
       }
       else {
           if (user === null) {
               var err = new Error('Bitte loggen Sie sich ein, um diese Seite zu sehen!');
               err.status = 400;
               res.redirect('/login');
               return next(err);
           }
           else {
               console.log("Questionnaire site reached with valid login!");
               questionnaire.find((error, items) => {
                   if (error) {
                       console.log(error);
                   }
                   else {
                       res.render('../public/generated/questionnaire.ejs', {items: items})
                   }
               });


               // res.sendFile('/Users/andreas/Developer/Web/FlagPriming/public/sites/test.html');

           }
       }
    });

    console.log("Questionnaire site reached!");

});

// Posting form data
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
