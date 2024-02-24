const express = require('express');
require('dotenv').config(); 
const connectDB = require('./config/db'); 
const formRoutes = require('./routes/form');
const cors = require('cors');
const session = require('express-session');
const passport = require("passport");

connectDB();

const app = express();

require('./config/passport');

app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: false } 
  }));
  
app.use(passport.initialize());
app.use(passport.session());
 
app.use(express.json());
app.use(formRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

