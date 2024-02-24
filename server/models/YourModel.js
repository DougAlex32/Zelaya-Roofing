const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  email: String,
  issue: String,
  details: String,
  // Add timestamps, or any other fields you need
}, { timestamps: true });

const YourModel = mongoose.model('YourModel', schema);

module.exports = YourModel;