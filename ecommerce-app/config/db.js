const mongoose = require('mongoose');

// Replace the connection string with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://mudassir:Mudassir123@cluster-assignment.0ptdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-assignment';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            // The useNewUrlParser and useUnifiedTopology options are no longer necessary for Mongoose 6+
        });
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit the application if the connection fails
    }
};

module.exports = connectDB;
