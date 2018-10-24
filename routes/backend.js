let express = require('express');
let request = require('request');
let router = express.Router();
let config = require('../database/config');
let questionnaire = require('../database/questionnaireDB');
let user = require('../database/mdb');

/* GET test page. */
router.get('/', function(req, res, next) {
    user.findById(req.session.userId).exec(function(error, user) {
        if (error) {
            return next(error);
        }
        else {
            if (user === null) {
                var err = new Error('Bitte loggen Sie sich ein, um diese Seite zu sehen!');
                console.log("no user id found");
                err.status = 400;
                res.redirect('/login');
                return next(err);
            }
            else {
                if (user.role === "admin") {
                    console.log("Backend site reached with valid login as Admin");
                    var questionnaires = [];
                    questionnaire.find(function(error, items) {
                        if (error) {
                            console.log("error");
                        }
                        else {
                            // let jsonData = JSON.parse(items);
                            items.map (item => {
                                console.log(item.name + " unpacked");
                                questionnaires.push(item);
                            });
                            console.log("unpacking finished " + questionnaires.length);
                            res.render('../public/generated/backend.ejs', { items: questionnaires });

                            //questionnaires = JSON.parse(items);
                        }
                    });

                    // res.render('../public/generated/backend.ejs');
                }
                else {
                    var err = new Error('Sie haben nicht die Berechtigungen, um diese Seite sehen zu können!');
                    err.status = 400;
                    res.redirect('/fail');
                    return next(err);
                }
            }
        }
    });
});

// Posting form data
router.post('/', function(req, res) {
    let data = req.body;
    console.log(data);
    delete data.submit;

    res.sendFile('/Users/andreas/Developer/Web/FlagPriming/public/sites/thanks.html');

});


module.exports = router;
