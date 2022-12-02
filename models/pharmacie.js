const mongoose = require('mongoose');

const pharmacieSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  nompharmacie: { type: String, required: true },
  numpharmacie: { type: Number, required: true },
  adressepharmacie: { type: Number, required: true },
  
});

module.exports = mongoose.model('pharmacie', pharmacieSchema);