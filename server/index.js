const express = require('express');
require('dotenv').config(); 
const connectDB = require('./config/db'); 
const formRoutes = require('./routes/form');

connectDB();

const app = express();

app.use(express.json());
app.use(formRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
