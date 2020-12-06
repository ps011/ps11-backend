const mongoose = require('../utils/database').getMongoose();
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('Save', saveSchema);
