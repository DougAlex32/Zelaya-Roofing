const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/User");
const jwt = require('jsonwebtoken');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        // Check that profile email matches the env admin
        const adminEmail = process.env.ADMIN;
        const profileEmail = profile.emails[0].value;

        if (profileEmail !== adminEmail) {
          // Email does not match the admin's email, handle accordingly
          // For instance, you can return done with a "null" user and a message
          return done(null, false, { message: 'Access restricted to admin only.' });
        }

        // If the email matches, proceed with finding or creating the user
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          // Existing user found, proceed with login
          return done(null, user);
        } else {
          // No user found with the Google ID, create a new user
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profileEmail, // Use the email from the profile
          });
          await user.save();
          return done(null, user);
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user._id); // Using _id for MongoDB
});


passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id);
    done(null, user); // Successfully found the user
  } catch (err) {
    done(err, null); 
  }
});

