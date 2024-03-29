const mongoose = require('../utils/database').getMongoose();
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:  String,
    thumbnail: String,
    banner: String,
    shortDescription: String,
    author: String,
    profileLink: String,
    date: { type: Date, default: Date.now },
    tags: String,
    content:   String,
    link: String,
    hidden: { type: Boolean, default: true},
    type: String
});

module.exports = mongoose.model('Blog', blogSchema);
