const express = require('express');
const about = require('../schemas/about.schema');
const router = express.Router();

router.get('/:name', async (req, res) => {
    try {
        const result = await about.findOne({ name: req.params.name });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/id/:id', async (req, res) => {
    try {
        const result = await about.findOne({ _id: req.params.id });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await about.find({});
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});


router.post('/create', async (req, res) => {
    try {
        const result = await about.create({
            name: req.body.name,
            about: req.body.about,
            imageUrl: req.body.imageUrl,
            resumeUrl: req.body.resumeUrl
        });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.post('/update/:name', async (req, res) => {
    try {
        const result = await about.update({ name: req.params.name }, req.body, {omitUndefined: true, multi: false, new: true})
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

router.post('/update/id/:id', async (req, res) => {
    try {
        const result = await about.update({ _id: req.params.id }, req.body, {omitUndefined: true, multi: false, new: true})
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});


module.exports = router;
