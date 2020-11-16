const express = require('express');
const subscribe = require('../schemas/subscribe.schema');
const router = express.Router();



router.post('/add', async (req, res) => {
    try {
        const result = await subscribe.create({
            email: req.body.email
        });
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;
