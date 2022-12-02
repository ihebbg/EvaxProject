const mongoose = require('mongoose')
const schema = mongoose.Schema
const volontaire_schema = new schema({
    nom_volontaire: {
        type: String,
        required: true,
    },
    prenom_volontaire: {
        type: String,
        required: true,
    },
    cin_volontaire: {
        type: Number,
        required: true,
        unique: true,
    },
    age_volontaire: {
        type: Number,
        required: true,
    },
    tel_volontaire: {
        type: Number,
        required: true,
        unique: true,
    },
})
module.exports = mongoose.model('volontaires', volontaire_schema)
