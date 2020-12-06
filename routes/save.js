const express = require('express');
const save = require('../schemas/save.schema');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const result = await save.create({
            username: req.body.username,
            password: req.body.password
        });
        res.status(200);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;
