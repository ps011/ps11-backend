const express = require('express');
const blog = require('../schemas/blog.schema');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await blog.find({}).sort('-date');
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/:type', async (req, res) => {
    try {
        const result = await blog.find({type: req.params.type}).sort('-date');
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.post('/create', async (req, res) => {
    try {
        const result = await blog.create({
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            banner: req.body.banner,
            thumbnail: req.body.thumbnail,
            author: req.body.author,
            profileLink: req.body.profileLink,
            tags: req.body.tags,
            content: req.body.content,
            link: req.body.link,
            type: req.body.type
        });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await blog.findById(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/delete/:id', async (req, res) => {
    try {
        const result = await blog.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/unhide/:id', async (req, res) => {
    try {
        const result = await blog.findByIdAndUpdate(req.params.id, {hidden: false}, {new: true});
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/hide/:id', async (req, res) => {
    try {
        const result = await blog.findByIdAndUpdate(req.params.id, {hidden: true}, {new: true});
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;
