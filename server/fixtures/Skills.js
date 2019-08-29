const seeder = require('mongoose-seed');

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: 'Skill',
    documents: [
      {
        name: 'Javascript'
      },
      {
        name: "Mongo"
      }
    ]
  }
];
module.exports = function() {
  // Connect to MongoDB via Mongoose
  seeder.connect('mongodb://localhost/mean', function() {
    // Load Mongoose models
    seeder.loadModels(['./skill/Skill.js']);

    // Clear specified collections
    seeder.clearModels(['Skill'], function() {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function() {
        seeder.disconnect();
      });
    });
  });
};