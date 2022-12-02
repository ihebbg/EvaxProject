const Dose = require('../../models/dose')
const express = require('express')
const router = express.Router()

router.post('/doses', async (req, res, next) => {
    try {
        const dose = new Dose({
            NomVaccin: req.body.NomVaccin,
            DateVaccin: req.body.DateVaccin,
            NumeroDose: req.body.NumeroDose,
          
        })
        const save_dose = await dose.save()
        res.status(201).json({
            message: 'dose est ajouté avec succés',
            save_dose,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})
module.exports = router;