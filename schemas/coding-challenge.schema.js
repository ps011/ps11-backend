const mongoose = require('../utils/database').getMongoose();
const Schema = mongoose.Schema;

const codingChallengeSchema = new Schema({
    name: String,
    score: Number,
    password: String
});

module.exports = mongoose.model('CodingChallenge', codingChallengeSchema);
