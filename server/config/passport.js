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
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          // User found, generate a JWT token
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "24h",
          });
          console.log("Generated JWT token:", token);
          // Attach the token to the user object or pass it through the done callback
          return done(null, { user, token });
        } else {
          // Create a new user and then generate a JWT token
          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          });
          await user.save();
          const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "24h",
          });
          return done(null, { user, token });
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser(function(userData, done) {
  done(null, userData.user.id); 
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id);
    done(null, user); // Successfully found the user
  } catch (err) {
    done(err, null); 
  }
});

