var express = require('express');
const dbUtil = require('../utils/database');
const blog = require('../schemas/blog.schema');
var router = express.Router();

/* GET blogs listing. */
router.get('/', function(req, res, next) {
    console.log(dbUtil.getDb());
    res.send('Default blog route is working fine');
});

router.post('/create', (req, res) => {
    blog.create({
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        banner: req.body.banner,
        thumbnail: req.body.thumbnail,
        author: req.body.author,
        profileLink: req.body.profileLink,
        tags: req.body.tags,
        content: req.body.content,
        link: req.body.link
    }, (err, doc) => {
        if (err) {
            res.send(err);
        } else {
            res.send(doc);
        }
    })
})

module.exports = router;
