var express = require('express');
const blog = require('../schemas/blog.schema');
var router = express.Router();

/* GET blogs listing. */
router.get('/', function(req, res, next) {
    blog.find({}, (err, blogList) => {
        if (err) {
            res.send(err);
        } else {
            res.send(blogList);
        }
    })
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
});

router.get('/:id', (req, res) => {
    blog.findOne({ link: req.body.link }, (err, blog) => {
        if (err) {
            res.send(err);
        } else {
            res.send(blog);
        }
    })
});

module.exports = router;
