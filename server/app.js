var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var SkillController = require('./skill/SkillController');
var QuestionController = require('./question/QuestionController');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/users', UserController);
app.use('/skills', SkillController);
app.use('/questions', QuestionController);

module.exports = app;