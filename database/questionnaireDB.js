var mongoose = require('mongoose');

let qSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    content: {
        type: JSON,
        required: true
    }
},
    {
        collection: 'questionnaires'
    });

var Questionnaire = mongoose.model('Questionnaire', qSchema);

module.exports = Questionnaire;