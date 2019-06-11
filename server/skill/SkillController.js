var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Skill = require('./Skill');

router.post('/',  (req, res) => {
    Skill.create({
            name : req.body.name,
        }, (err, skill) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(skill);
        });
});

router.patch('/:id', function (req, res) {
    Skill.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, skill) {
        if (err) return res.status(500).send("There was a problem updating the skill.");
        res.status(200).send(skill);
    });
});

router.get('/', function (req, res) {
    Skill.find({}, function (err, skills) {
        if (err) return res.status(500).send("There was a problem finding the skill.");
        res.status(200).send(skills);
    });
});

router.delete('/:id', function (req, res) {
    Skill.findByIdAndRemove(req.params.id, function (err, skill) {
        if (err) return res.status(500).send("There was a problem deleting the skill.");
        res.status(200).send("Skill: "+ skill.name +" was deleted.");
    });
});

module.exports = router;