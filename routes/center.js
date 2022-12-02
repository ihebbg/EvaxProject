const Center = require('../models/center')
const express = require('express')
const router = express.Router()

//Ajouter un center
router.post('/centers', async (req, res, next) => {
    try {
        const center = new Center({
            nom_center: req.body.nom_center,
            num_center: req.body.num_center,
            adresse: req.body.adresse,
            nombre_accueil: req.body.nombre_accueil,
        })
        const save_center = await center.save()
        res.status(201).json({
            message: 'le center est ajouté avec succés',
            save_center,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})

//Supprimer un center
router.delete('/centers/:idCenter', async (req, res, next) => {
    try {
        const center_delete = await Center.deleteOne({
            _id: req.params.idCenter,
        })
        res.status(200).json({
            message: 'le center est supprimé avec succès',
            center_delete,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})

//Modifier un center
router.put('/centers/:idCenter', async (req, res, next) => {
    try {
        const center_update = await Center.updateOne(
            { _id: req.params.idCenter },
            {
                $set: {
                    nom_center: req.body.nom_center,
                    num_center: req.body.num_center,
                    adresse: req.body.adresse,
                    nombre_accueil: req.body.nombre_accueil,
                },
            },
        )
        res.status(200).json({
            message: 'le center est modifié avec succès',
            center_update,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})

//Consulter tous les centers
router.get('/centers', async (req, res, next) => {
    try {
        const centers = await Center.find()
        res.status(200).json({
            message: 'tous les centers sont consultés',
            centers,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})

//Consulter un center par ID
router.get('/centers/:idCenter', async (req, res, next) => {
    try {
        const center = await Center.findById({ _id: req.params.idCenter })
        res.status(200).json({
            message: 'un center est consulté',
            center,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})
module.exports = router
