const express = require('express');
const router = express.Router();
const passport = require('passport');
const { google } = require('googleapis');

// Route to start Google OAuth flow
router.get('/google', passport.authenticate('google', { 
    scope: ['profile', 'email'] 
}));

// Google OAuth callback route
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }), 
    (req, res) => {
        res.redirect('/'); 
    }
);

// Logout route
router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.session.destroy(() => {
            res.redirect('/'); // Redirect after logging out and destroying the session
        });
    }); 
});


const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_SECRET,
    process.env.GOOGLE_REDIRECT_URL
  );
  
  // Define scopes
  const scopes = [
    'https://www.googleapis.com/auth/drive.metadata.readonly'
  ];
  
  // Route to start the OAuth flow
  router.get('/login', (req, res) => {
    const authorizationUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      include_granted_scopes: true
    });
  
    
    res.redirect(authorizationUrl);
  });

module.exports = router;
