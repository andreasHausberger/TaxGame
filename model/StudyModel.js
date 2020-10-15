let Study = require("../class/Study");
let db = require("../database/study");

function getStudy(id) {

}

async function getAllStudies() {
    let result = await db.find((error, items) => {
        if (error) {
           console.warn("Error while retrieving Studies!");
        }
        else {
            let studies = [];

            items.map(item => {
                let name = item.name;
                let description = item.description;
                let segments = item.segments;
                let newStudy = new Study(name, description, segments);
                studies.push(newStudy);
            });

            return studies;
        }
    });

    return result;
}

module.exports.getAllStudies = getAllStudies();