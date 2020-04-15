var express = require('express');
var router = express.Router();
const User = require('../schemas/user.schema');
/* GET users listing. */
router.post('/login', async(req, res) => {
    try {
        const result = await User.findOne({ username: req.body.username,  password: req.body.password});
        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send('User not found');
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
});

module.exports = router;
