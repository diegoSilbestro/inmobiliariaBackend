const mongoose = require('mongoose');
require('dotenv').config();

const dbPropertyConnection = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Base de datos conectada');
    } catch (error) {
        console.log('No se pudo conectar con la Base de Datos', error);
    }
}

module.exports = { dbPropertyConnection }