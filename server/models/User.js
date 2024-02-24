const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  image: String,
  email: {
    type: String,
    required: true,
  },
  // Add any additional fields you might need
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
