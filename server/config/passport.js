const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').OAuth2Strategy;
const User = require('../models/TempUser');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},function(accessToken,refreshToken, profile,cd){

}));