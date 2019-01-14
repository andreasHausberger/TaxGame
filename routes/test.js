let express = require('express');
let request = require('request');
let router = express.Router();
let mysql = require('mysql');
// let user = require('../database/mdb');
let player = require('../database/playerDB');
let questionnaire = require('../database/questionnaireDB');
let results = require('../database/resultsDB');
let config = require('../database/modeConfigDB');

/* GET test page. */
router.get('/', function(req, res, next) {
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

                                       var selectedMode = "";
                                       if (configData.mode === "Random") {
                                           let modes = ["Plain", "Rich", "Gamified"];
                                           let modeIndex = Math.floor(Math.random() * 3);
                                           selectedMode = modes[modeIndex];

                                           console.log("Random number for selection: " + modeIndex + " should select: " + modes[modeIndex]);

                                       }
                                       else {
                                           selectedMode = configData.mode;
                                       }

                                       let index = selectedMode === "Gamified" ? 1 : 2; // if Gamified, use game questionnaire on pos 1, else use plain questionnaire on pos 2

                                       let selectedQuestionnaire = items[index];
                                       let url = process.env.HEROKU_URL || req.get('host');
                                       console.log("rendering test with mode: " + selectedMode + " and questionnaire " + selectedQuestionnaire.name);
                                       res.render('../public/generated/questionnaire.ejs', {items: selectedQuestionnaire, url: url, players: players, globalMode: selectedMode, siteTitle: "Questionnaire"})
                                   }
                               });
                           }
                       });

                   }
               });


               // res.sendFile('/Users/andreas/Developer/Web/FlagPriming/public/sites/test.html');

    console.log("Questionnaire site reached!");

});

// Posting form data
router.post('/', function(req, res, next) {
    console.log("Reached Post method in test.js with " + req.body.submittableData);
    let data = JSON.parse(req.body.submittableData);

    data.content = JSON.parse(data.content);
    data.gameData.badgeArray = JSON.parse(data.gameData.badgeArray);
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
                    savePlayer(data.content, data.gameData.gameScore);
                    res.redirect("/thanks");
                }
            });
        }
        else {
            console.log("Failed saving questionnaire data!");
            res.redirect("/thanks");
        }
});

function savePlayer(itemblocks, score) {
    for (let i = 0; i < itemblocks.length; i++) {
        let currentBlock = itemblocks[i];

        if (currentBlock.role === "leaderboard") {
            if (currentBlock.content.name !== "") {
                let name = currentBlock.content.name;

                let playerData = {
                    "username": name,
                    "score" : score,
                    "date" : Date()
                };

                player.create(playerData, function(err) {
                    if (err) {
                        console.log("Error while saving a player: " +  err);
                    }
                    else {
                        console.log("successfully saved a player to the leaderboard");
                    }
                });

            }
        }

    }
}



module.exports = router;
