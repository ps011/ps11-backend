const mongoose = require('../utils/database').getMongoose();
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    name: String,
    imageUrl:  String,
    about: String
});

module.exports = mongoose.model('About', aboutSchema);
