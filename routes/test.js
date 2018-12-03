let express = require('express');
let request = require('request');
let router = express.Router();
let mysql = require('mysql');
let user = require('../database/mdb');
let player = require('../database/playerDB');
let questionnaire = require('../database/questionnaireDB');
let results = require('../database/resultsDB');
let config = require('../database/modeConfigDB');

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

                               console.log("Players found");
                               config.findOne({}, {}, {sort: { 'date' : -1 } }, (error, configData) => {
                                   if (error) {
                                       console.log(error);
                                   }
                                   else {
                                       let index = configData.questionnaire;
                                       let selectedQuestionnaire = items[index];
                                       let url = process.env.HEROKU_URL || req.get('host');
                                       console.log("rendering test with mode: " + configData.mode+ " and questionnaire " + configData.questionnaire);
                                       res.render('../public/generated/questionnaire.ejs', {items: selectedQuestionnaire, url: url, players: players, config: configData, siteTitle: "Questionnaire"})
                                   }
                               });
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
router.post('/', function(req, res, next) {
    console.log("Reached Post method in test.js with " + req.body.submittableData);
    let data = JSON.parse(req.body.submittableData);

    let resultsData = {
        "name" : data.name,
        "data" : data
    };

        if (resultsData) {
            console.log("data is being written... " + resultsData);
            results.create(resultsData, function (err, user) {
                if (err) {
                    return next(err);
                }
                else {
                    console.log("successfully saved questionnaire data!");
                    res.redirect("/thanks");
                }
            });
        }
        else {
            console.log("Failed saving questionnaire data!");
            res.redirect("/thanks");
        }
});



module.exports = router;
