const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  localizacao: { type: String, required: true },
  descricao: { type: String},
  dataRegistro: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Animal", AnimalSchema);
