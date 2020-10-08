let express = require('express');
let router = express();
let questionnaire = require('../database/questionnaireDB');
let user = require('../database/mdb');
let results = require('../database/resultsDB');
let config = require('../database/modeConfigDB.js');
let study = require('../database/study.js');


/* GET test page. */
router.get('/', function(req, res, next) {
    console.log("Reached backend page");
    user.findById(req.session.userId).exec(function(error, user) {
        if (error) {
            console.log("Error while retrieving users");

            return next(error);
        }
        else {
            if (user === null) {
                var err = new Error('Bitte loggen Sie sich ein, um diese Seite zu sehen!');
                console.log("Error: no user id found");
                err.status = 400;
                res.redirect('/login');
                return next(err);
            }
            else {
                if (user.role === "admin") {
                    console.log("Backend site reached with valid login as Admin");
                    console.log(user);
                    var questionnaires = [];
                    var resultsData = [];

                    study.find(function(error, items) {
                        if (error) {
                            console.log("Error while retrieving studies");
                        }
                        else {
                            let studies = [];
                            items.map(item => {
                                studies.push(item);
                            });
                            console.log("Finished unpacking studies: ", studies.length);
                            let websiteData = {
                                "studies": studies,
                                "user": user
                            };
                            res.render('../public/pages/backend.ejs', {data: websiteData, siteTitle: "Backend"})
                        }
                    })

                    // res.render('../public/pages/backend.ejs');
                }
                else {
                    var err = new Error('Sie haben nicht die Berechtigungen, um diese Seite sehen zu können!');
                    console.log("No access for user: " + user.username);
                    err.status = 400;
                    res.redirect('/fail');
                    // return next(err);
                }
            }
        }
    });
});

router.get("/new", function(req, res, next) {

    res.render("../public/pages/study-form.ejs");
});

router.post("/new", function(req, res, next) {
    let data = req.body;
    let status = 0;

    if (data != null) {
        let studyData = {
            "name": data.study_name,
            "description": data.study_description,
            "blocks": null
        }

        study.create(studyData, function(err, config) {
            if (err) {
                return next(err);
            }
            else {
                status = 201;
                res.status = status;
                console.log("Saved / Updated new Study!");
                return res.redirect("/backend");
            }
        });
    }
});

// Posting form data
router.post('/', function(req, res, next) {
    let data = req.body;
    let today = new Date();
    console.log(data);
    let configData = {
        "mode": data.mode,
        "questionnaire": data.questionnaire,
        "date": today
    };

    config.create(configData, function (err, config) {
        if (err) {
            return next(err);
        }
        else {
            console.log("sucessfully updated config with . " + config.mode);
        }
    });

    return res.redirect('/backend');
});


module.exports = router;
