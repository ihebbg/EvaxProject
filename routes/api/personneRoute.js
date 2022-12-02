const mongoose = require('mongoose');
const express = require('express');
const User = require('../../models/personne');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const isAuth = require('../../middlewares/isAuth');
mailer = require('express-mailer')

const {
  registerRules,
  validator,
  loginRules,
} = require('../../middlewares/validator');
const personne = require('../../models/personne');
router.post(
    '/register',
   
    validator,
    
  
    async (req, res) => {
      try {
        const {
          nom,
          prenom,
          email,
          password,
          cin,
          adress,
          registrationDate,
           phone,
          role,
        } = req.body;

        
  
        // see if user exists
        let user = await User.findOne({ email })
        if (user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'user already exists' }] })
        }

        // get user Gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm',
        })

        //return jwt

        // create new User
        const newUser = new User({
            nom,
            prenom,
            email,
            password,
            cin,
            adress,
            registrationDate,
            phone,
            role,
        })

        // encrypt password
        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)
        newUser.password = hashedPassword

        // save New user
        await newUser.save()

        // jwt
        const payload = {
            id: newUser._id,
            name: newUser.lastName,
        }
        const token = await jwt.sign(payload, process.env.secretOrKey, {
            expiresIn: '2 days',
        })

        res.status(200).send({ msg: 'user addedd', newUser, token })
    } catch (error) {
        console.error(error)
        res.status(500).send('server error')
    }
})

  


router.get('/', async (req, res) => {
    try {
        const allPersonnes = await personne.find()
        if (allPersonnes.length == 0) {
            return res.json({ msg: 'there is no person' })
        }
        res.status(200).send({ msg: 'all persons', allPersonnes })
    } catch (error) {
        console.error(error)
        res.status(500).json({ msg: 'server error' })
    }
})
//modifier inscription
router.put('/:_id', async (req, res) => {
    try {
      const { _id } = req.params;
      const {
        numInscription,
        nom,
        prenom,
        email,
        cin,
        password,
        phone,
        adress,
        codeVerif,
        doses,
        Nomvaccin,
       } = req.body
      
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      console.log(hashedPassword);
  
    
      const updatedInscription = { $set: req.body };
      console.log(updatedInscription,'updatedInscription');
      
      const inscription = await personne.findOneAndUpdate({ _id }, { ...updatedInscription });
      console.log(inscription.password);
      const inscriptionaftermodif = await personne.find({ _id });
      console.log(inscription.inscriptionaftermodif);
  
      res.status(200).json({ msg: 'inscription modified', inscriptionaftermodif });
    } catch (error) {
      console.error(error);
      res.status(500).send({ errors: error });
    }
  });
module.exports = router
