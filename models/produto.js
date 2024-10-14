const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  quantidade_em_estoque: {
    type: Number,
    required: true,
  },
  imagem: {
    type: String,
  },
});

module.exports = mongoose.model('Produto', produtoSchema);
