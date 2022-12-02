const mongoose = require('mongoose')
const schema = mongoose.Schema
const center_schema = new schema({
    nom_center: {
        type: String,
        required: true,
    },
    num_center: {
        type: String,
        required: true,
        unique: true,
    },
    adresse: {
        type: String,
        required: true,
    },
    nombre_accueil: {
        type: Number,
        required: true,
    },
})
module.exports = mongoose.model('centers', center_schema)
