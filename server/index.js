const express = require('express');
require('dotenv').config(); 
const connectDB = require('./config/db'); 
const formRoutes = require('./routes/form');
const cors = require('cors');
const session = require('express-session');
const passport = require("passport");
const authRoutes = require('./routes/auth');

connectDB();

const app = express();

app.set('view engine', 'ejs');

require('./config/passport');

app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production" 
    }
  }))
app.use(passport.initialize());
app.use(passport.session());
 
app.use(express.json());
app.use(formRoutes);

app.use('/', authRoutes);

app.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Welcome to Zelaya Roofing', 
        user: req.user || null });
  });

  

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

