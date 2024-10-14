const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
  },
  rua: {
    type: String,
  },
  numero: {
    type: String,
  },
  complemento: {
    type: String,
  },
  cidade: {
    type: String,
  },
  estado: {
    type: String,
  },
  cep: {
    type: String,
  },
});

module.exports = mongoose.model('Cliente', clienteSchema);
