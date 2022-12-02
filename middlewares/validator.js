const { body, validationResult } = require('express-validator');

const registerRules = () => [
  body('nom', 'nom is required').notEmpty(),
  body('prenom', 'prenom is required').notEmpty(),
  body('cin', 'CIN is required').notEmpty(),
  body('email', 'please enter a valid email').isEmail(),
  body('password', 'passwrod must have 6 or more characters').isLength({
    min: 6,
  }),
  body('phone', 'please enter a valid phone number').isNumeric(),
  body('adress', 'adress is required').notEmpty(),
  body('role', 'please choose your role').notEmpty(),
];

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array().map((el) => ({
          msg: el.msg,
        })),
      });
    }
    next();
  };
  
  module.exports = {
    validator,
    registerRules,
    
  
  };