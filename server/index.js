const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const formRoutes = require('./routes/form');
const cors = require('cors');
const session = require('express-session');
const passport = require("passport");
const authRoutes = require('./routes/auth');
const path = require('path');
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require('express-jwt');

connectDB();

const app = express();
app.set('view engine', 'ejs');
require('./config/passport');
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === "production" }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(formRoutes);
app.use('/auth', authRoutes);

// JWT middleware for protected routes
const requireAuth = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

app.get('/oauth2callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Zelaya Roofing', user: req.user || null });
});

// Example protected route
app.get('/api/protected', requireAuth, (req, res) => {
  res.json({ message: "You accessed a protected route!" });
});

// Your login route
app.post('/api/login', (req, res) => {
  // Your authentication logic here
});

// Serve React app - make sure this is last
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Access user and token from the authentication info
    const { user, token } = req.user;
    // Or, set a cookie with the JWT (ensure your site is served over HTTPS if doing this)
    res.cookie('jwt', token, { httpOnly: true, secure: true }).redirect('/dashboard');
  }
)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


