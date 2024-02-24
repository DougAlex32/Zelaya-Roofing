const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
// Use the routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
