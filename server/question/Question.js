var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({  
  content: String,
  skill:
  {
    type: Schema.Types.ObjectId,
    ref: 'skill'
  }
  
});

mongoose.model('Question', QuestionSchema);

module.exports = mongoose.model('Question');