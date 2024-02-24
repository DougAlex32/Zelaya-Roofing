const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  email: String,
  issue: String,
  details: String,
}, { timestamps: true });

const Model = mongoose.model('Model', schema);

module.exports = Model;