const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database conectada com sucesso');
    } catch (error) {
        console.error('Conexçao de database falhou:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;