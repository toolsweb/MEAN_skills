var mongoose = require('mongoose');  

var SkillSchema = new mongoose.Schema({  
  name: String,
});

mongoose.model('Skill', SkillSchema);

module.exports = mongoose.model('Skill');