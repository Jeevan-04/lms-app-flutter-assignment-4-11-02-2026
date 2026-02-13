const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/itm_flutter_lms?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB Successfully...');
})

db.on('error', (error) => {
    console.log('Error connecting to MongoDB: ', error);
})

module.exports = db;