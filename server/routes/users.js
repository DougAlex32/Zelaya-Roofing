const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../config/auth'); 
const User = require('../models/User');

// Get user profile
router.get('/profile', ensureAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Update user profile
router.post('/profile/update', ensureAuthenticated, async (req, res) => {
    // Implementation for updating user profile
});

// Delete user
router.delete('/delete', ensureAuthenticated, async (req, res) => {
    // Implementation for deleting a user
});

module.exports = router;
