const mongoose = require('../utils/database').getMongoose();
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    name: String,
    imageUrl:  String,
    about: String,
    resumeUrl: String,
    location: String,
    designation: String,
    education: String,
    skills: [
        {
            name: String,
            logo: String,
            rating: Number
        }
    ],
    experience: [
        {
            company: String,
            logo: String,
            from: String,
            to: String,
            technologies: [String],
            designation: String,
            location: String
        }
    ],
    profiles: [
        {
            name: String,
            url: String
        }
    ],
    interests: [
        {
            title: String,
            description: String
        }
    ]
});

module.exports = mongoose.model('About', aboutSchema);
