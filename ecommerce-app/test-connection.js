const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mudassir:Mudassir123@cluster-assignment.0ptdu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-assignment')
    .then(() => {
        console.log('Database connected');
        mongoose.connection.close(); // Close connection after testing
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
