var express = require('express');
const codingChallenge = require('../schemas/coding-challenge.schema');
var router = express.Router();

/* GET all data. */
router.get('/', async (req, res) => {
    try {
        const result = await codingChallenge.find({});
        res.status(200).send(result);
    } catch (e) {
        res.status(404).send(e.message);
    }
});

/* Create a User */
router.post('/add', async (req, res) => {
    if (req.body.name && req.body.password) {
        try {
            await codingChallenge.create({name: req.body.name, password: Buffer.from(req.body.password).toString('base64'), score: 0});
            res.status(200).send("User Created Successfully");
        } catch (e) {
            console.log(e);
            res.status(500).send("There was an error in creating User");
        }

    } else {
        res.status(400).send("Name is a required field to create a User");
    }
});

router.post('/update-score', async (req, res) => {
    if (req.body.userId && req.body.password && req.body.score) {
        const user = await codingChallenge.findById(req.body.userId);
        if (user.password === Buffer.from(req.body.password).toString('base64')) {
            let score = parseInt(user.score) + parseInt(req.body.score);
            try {
                const result = await codingChallenge.findByIdAndUpdate(req.body.userId, {score}, {new: true})
                res.send({message: "Score updated", data: {score: result.score}});
            } catch (e) {
                res.status(500).send("An error occurred in updating score");
            }
        } else {
            res.status(400).send("Password does not match");
        }
    } else {
        res.status(400).send("Password is a required field to update a User's score");
    }
});
module.exports = router;
