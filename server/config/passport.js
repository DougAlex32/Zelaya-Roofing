const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/User");

passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cd) {
      User.findOne({ googleId: profile.id }, function (err, user) {
        if (err) return cd(err);
        if (user) {
          return cb(null, user);
        } else {
          const newUser = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          });
          // save our user to the database
          newUser.save(function (err) {
            if (err) return cd(err);
            return cd(null, newUser);
          });
        }
      });
    }
  )
);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});