const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikertCard = new Schema({
    ID1: String,
    ID2: String,
    user: String,
    result: String,
    date: Date
}, {collection: 'Comparison'});

module.exports = LikertCards = mongoose.model('LikertCard', LikertCard);