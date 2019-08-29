var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors')
//require('./fixtures/index')();
var UserController = require('./user/UserController');
var SkillController = require('./skill/SkillController');
var QuestionController = require('./question/QuestionController');
app.use(cors())


app.use('/users', UserController);
app.use('/skills', SkillController);
app.use('/questions', QuestionController);

module.exports = app;