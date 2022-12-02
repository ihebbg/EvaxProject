const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Operateur = require('../models/operatuer')
// Authentification admin
router.post('/login_admin', async (req, res, next) => {
    const admin = await Admin.findOne({ email: req.body.email })
    if (!admin) return res.send('Not found email')

    const validpassord = await bcrypt.compare(admin.password) //localcompare if equal return 0(faux)
    if (validpassord) return res.send('Not found password')

    // create and assign token // password and email correct
    const token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET)
    res.status(200).json('auth-token', token).send({
        token: token,
        message: 'logged in admin !',
    })
})

// Authentification operateur
router.post('/login_operateur', async (req, res, next) => {
    const op = await Operateur.findOne({ email: req.body.email })
    if (!op) return res.send('Not found email')

    const validpassord = await bcrypt.compare(op.password) //localcompare if equal return 0(faux)
    if (validpassord) return res.send('Not found password')

    // create and assign token // password and email correct
    const token = jwt.sign({ _id: op._id }, process.env.TOKEN_SECRET)
    res.status(200).header('auth-token', token).json({
        token: token,
        message: 'logged in operateur !',
    })
})


module.exports = router
