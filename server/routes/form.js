const express = require('express');
const router = express.Router();
const Model = require('../models/Model'); // Import your Mongoose model

router.post('/api/form', async (req, res) => {
  try {
    const { name, email, issue, details } = req.body;
    const newSubmission = new Model({
      name,
      email,
      issue,
      details,
    });

    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;