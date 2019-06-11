var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Question = require('./Question');

router.post('/', function (req, res) {
    Question.create({
            content : req.body.content,
            skill: req.body.skill
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

router.put('/:id', function (req, res) {
    Question.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

router.get('/:id', function (req, res) {
    Question.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

router.get('/', function (req, res) {
    Question.find({}, function (err, questions) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(questions);
    });
});

router.delete('/:id', function (req, res) {
    Question.findByIdAndRemove(req.params.id, function (err, questions) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ questions.name +" was deleted.");
    });
});

module.exports = router;