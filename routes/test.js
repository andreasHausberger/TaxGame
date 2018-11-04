let express = require('express');
let request = require('request');
let router = express.Router();
let mysql = require('mysql');
let config = require('../database/config');
let user = require('../database/mdb');
let player = require('../database/playerDB');
let questionnaire = require('../database/questionnaireDB');
let results = require('../database/resultsDB');

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
                       player.find((error, players) => {
                           if (error) {
                               console.log(error);
                           }
                           else {
                               res.render('../public/generated/questionnaire.ejs', {items: items, players: players})
                           }
                       });

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
    console.log("Reached Post method in test.js");
    let data = JSON.parse(req.body.submittableData);
    if (data.name && data.content) {
        let resultsData = {
            name: data.name,
            data: data.content,
        };

        results.create(resultsData, function (err, user) {
            if (err) {
                return next(err);
            }
            else {
                console.log("successfully saved questionnaire data!");
            }
        });
    }
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
