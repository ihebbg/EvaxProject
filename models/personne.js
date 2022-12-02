const { unique } = require('faker');
const mongoose = require('mongoose');

const personneSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  numInscription: {
    type: Number,
    default: Math.floor(Math.random() * (99999999 - 10000000) + 10000000),
    unique: true,
  },
  nom: { type: String },
  prenom: { type: String},
  email: { type: String, unique: true },
  cin: { type: String,unique: true },
  password: { type: String},
  phone: { type: Number },
  adress: { type: String },
  registrationDate: { type: Date, default: Date.now },
  status: {
    type: String, 
    enum: ['Pending', 'Active'],
    default: 'Pending'
  },
  codeVerif: { 
    type: String, 
    unique: true },
  doses:{
    type: String,
  },
  Nomvaccin:{
    type: String,
  },
  DateVaccin:{
    type: String,
  },
  pharmacie: {
    type: mongoose.Types.ObjectId,
    ref: 'pharmacie',
  },

  centre: {
    type: mongoose.Types.ObjectId,
    ref: 'centre',
  },
});

module.exports = mongoose.model('personne', personneSchema);