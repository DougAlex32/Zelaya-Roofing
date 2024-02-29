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
const FormSubmission = require('./models/FormSubmission');

connectDB();

const app = express();
app.set('view engine', 'ejs');
require('./config/passport');
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' // Or wherever your client is hosted
  }));

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
app.use(express.static(path.join(__dirname, '..', 'zelaya-roofing', 'build')));


// JWT middleware for protected routes
const requireAuth = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
});

app.get('/oauth2callback', (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); } // Use your failureRedirect here
    
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      // Redirect to the URL defined in CLIENT_BASE_URL environment variable
      const redirectTo = process.env.CLIENT_BASE_URL || '/';
      return res.redirect(redirectTo);
    });
  })(req, res, next);
});


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

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }))



app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Generate JWT for the user
  if (req.user){

    const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json( {
      token
    });
  
  } else{
    res.status(401).json({})
  }


  }
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'zelaya-roofing', 'build', 'index.html'));
});

app.get('/api/user', (req, res) => {
   
    if (!req.user) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
  
    // Respond with user data
    res.json({ user: req.user });
  });

  const isAuthenticated = expressJwt({
    secret: process.env.JWT_SECRET, // The secret used to sign the JWT
    algorithms: ['HS256'], // Specify the algorithm used for JWT
    getToken: (req) => req.cookies.jwt, // Get the token from request cookies
  });
  app.get('/api/dashboard', async (req, res) => {
    try {
      const submissions = await FormSubmission.find({});
      res.json(submissions);
    } catch (error) {
      console.error('Failed to fetch submissions:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  app.post('/api/form', async (req, res) => {
    try {
        const { name, email, issue, details } = req.body;
        const newSubmission = new FormSubmission({
            name,
            email,
            issue,
            details
        });

        await newSubmission.save();
        res.status(201).json({ message: 'Form submission saved successfully.' });
    } catch (error) {
        console.error('Error saving form submission:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


