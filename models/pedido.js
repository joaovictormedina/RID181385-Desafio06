const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  id_produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true,
  },
  id_venda: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Venda',
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  preco_unitario: {
    type: Number,
    required: true,
  },
  preco_total: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Pedido', pedidoSchema);
