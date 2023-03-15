const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchea = new Schema ({
    direccion: {
        type: String,
        required: true,
        unique: true
    },
    tipoOperacion: {
        type: String,
        required: true
    },
    tipoInmueble: {
        type: String,
        required: true
    },
    ambientes: {
        type: Number,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    superficie: {
        type: Number,
        required: true
    },
    expensas: {
        type: Number
    },
    antiguedad: {
        type: Number
    },
    baños: {
        type: Number
    },
    cocheras: {
        type: Number
    },
    descripcion: {
        type: String
    },
    latitud: {
        type: Number
    },
    longitud: {
        type: Number
    },
    img: {
        type: Array,
        required: true
    }
})

const Property = mongoose.model('Property', storeSchea);
module.exports = { Property };