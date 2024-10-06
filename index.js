// const express = require('express');
// const app = express();
// require('dotenv').config();

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// app.use(express.json());


// // View engine setup
// app.set('view engine', 'ejs');

// // Routes
// const categoryRoutes = require('./routes/categoryRoute');
// const feedbackRoutes = require('./routes/feedbackRoute');

// app.use(categoryRoutes);
// app.use(feedbackRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const app = express();
const path = require('path');

// Load environment variables from .env file
require('dotenv').config();

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Set the views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const categoryRoutes = require('./routes/categoryRoute');
const feedbackRoutes = require('./routes/feedbackRoute');

// Use routes
app.use(categoryRoutes);
app.use(feedbackRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

