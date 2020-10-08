var mongoose = require('mongoose');

let studySchema = new mongoose.Schema( {
    name: {
        type: String,
        unique: false,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    blocks: {
        type: JSON,
        required: false
    }
});

module.exports = mongoose.model("Study", studySchema);