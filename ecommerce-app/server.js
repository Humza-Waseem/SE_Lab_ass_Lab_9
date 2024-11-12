const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the connectDB function
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // Enable CORS for cross-origin requests

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB Atlas

// Routes
app.use('/auth', authRoutes);       // Authentication routes
app.use('/products', productRoutes); // Product CRUD routes

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
