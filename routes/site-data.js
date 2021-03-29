var express = require('express');
var router = express.Router();
const siteData = require('../schemas/site-data.schema');

/* GET site data */
router.get('/:userId', async (req, res, next) => {
    try {
        const result = await siteData.findOne({userId: req.params.userId});
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

/* Add meta data */
router.post('/meta', async (req, res) => {
    try {
        const result = await siteData.findOneAndUpdate({userId: req.body.userId}, {meta: req.body.meta}, {
            new: true,
            upsert: true
        });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
})

/* Add banner data */
router.post('/banner', async (req, res) => {
    try {
        const result = await siteData.findOneAndUpdate({userId: req.body.userId}, {banner: req.body.banner}, {
            new: true,
            upsert: true
        });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
})

/* Add header data */
router.post('/header', async (req, res) => {
    try {
        const result = await siteData.findOneAndUpdate({userId: req.body.userId}, {header: req.body.header}, {
            new: true,
            upsert: true
        });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
})

module.exports = router;
