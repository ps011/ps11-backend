const mongoose = require('../utils/database').getMongoose();
const Schema = mongoose.Schema;

const siteDataSchema = new Schema({
    userId: String,
    meta: {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        css: [String],
        js: [String],
        image: String,
        url: String,
        twitterHandle: String,
        manifest: String,
        keywords: [String],
        themeColor: String
    },
    header: {
        logoUrl: {
            type: String,
            required: true
        },
        navMap: [{
            label: {
                type: String,
                required: true
            },
            href: {
                type: String,
                required: true
            }
        }]
    },
    banner: {
        illustration: String,
        texts: [String],
        ctaLabel: String,
        ctaUrl: String
    }
});

module.exports = mongoose.model('SiteData', siteDataSchema);
