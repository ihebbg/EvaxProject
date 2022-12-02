const Volontaire = require('../models/volontaire')
const express = require('express')
const router = express.Router()

//Ajouter volontaire
router.post('/volontaires', async (req, res, next) => {
    try {
        const volonaire = new Volontaire({
            nom_volontaire: req.body.nom_volontaire,
            prenom_volontaire: req.body.prenom_volontaire,
            cin_volontaire: req.body.cin_volontaire,
            age_volontaire: req.body.age_volontaire,
            tel_volontaire: req.body.tel_volontaire,
        })
        const save_volonaire = await volonaire.save()
        res.status(201).json({
            message: 'le volontaire est ajouté avec succés',
            save_volonaire,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})
//Consulter tous les volontaires
router.get('/', async (req, res, next) => {
    try {
        const volontaires = await Volontaire.find()
        res.status(200).json({
            message: 'tous les volontaires sont consultés',
            volontaires,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})
//Consulter un volonaire par ID
router.get('/volontaires/:idVolontaire', async (req, res, next) => {
    try {
        const volontaire = await Volontaire.findById({
            _id: req.params.idVolontaire,
        })
        res.status(200).json({
            message: 'un volontaire est consulté',
            volontaire,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})
//Supprimer un volontaire
router.delete('/volontaires/:idVolontaire', async (req, res, next) => {
    try {
        const volonaire_delete = await Volontaire.deleteOne({
            _id: req.params.idVolontaire,
        })
        res.status(200).json({
            message: 'le volontaire est supprimé avec succès',
            volonaire_delete,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})
//Modifier un volontaire
router.put('/volontaires/:idVolontaire', async (req, res, next) => {
    try {
        const volontaire_update = await Volontaire.updateOne(
            { _id: req.params.idVolontaire },
            {
                $set: {
                    nom_volontaire: req.body.nom_volontaire,
                    prenom_volontaire: req.body.prenom_volontaire,
                    cin_volontaire: req.body.cin_volontaire,
                    age_volontaire: req.body.age_volontaire,
                    tel_volontaire: req.body.tel_volontaire,
                },
            },
        )
        res.status(200).json({
            message: 'le volontaire est modifié avec succès',
            volontaire_update,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})
module.exports = router
