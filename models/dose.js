const mongoose = require('mongoose')

const dose_schema = new mongoose.Schema({
    NomVaccin: {
        type: String,
        required: true,
    },
    DateVaccin:{ type: Date, },
    NumeroDose: { type: Number, required: true },
})

module.exports = mongoose.model('dose', dose_schema)
