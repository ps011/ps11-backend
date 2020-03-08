const mongoose = require('../utils/database').getMongoose();
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    id: {
        type: String,
        unique: true,
        autoIncrement: true
    },
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
    hidden: Boolean
});

module.exports = mongoose.model('Blog', blogSchema);
