const mongoose = require('mongoose')

const admin_schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: { type: String, required: true },
})

module.exports = mongoose.model('admin', admin_schema)
