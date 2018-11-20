var mongoose = require('mongoose');


let cSchema = new mongoose.Schema({
    mode: {
        type: String,
        required: true
    },
    questionnaire: {
        type: Number
    },
    date: {
        type: Date,
        required: true
    }
});

var Config = mongoose.model('Config', cSchema);

module.exports = Config;