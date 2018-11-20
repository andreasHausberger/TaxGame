var mongoose = require('mongoose');

let pSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: false,
        required: true
    },
    score: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
},
    {
        collection: 'players'
    });

var Player = mongoose.model('Player', pSchema);

module.exports = Player;