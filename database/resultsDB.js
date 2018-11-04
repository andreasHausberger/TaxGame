var mongoose = require('mongoose');

let rSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: false,
            required: true
        },
        data: {
            type: JSON,
            required: true
        }
    });

var Results = mongoose.model('Results', rSchema);

module.exports = Results;