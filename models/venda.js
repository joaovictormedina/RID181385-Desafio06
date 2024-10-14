const mongoose = require('mongoose');

const vendaSchema = new mongoose.Schema({
  data_da_venda: {
    type: Date,
    default: Date.now,
  },
  id_cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true,
  },
  status_da_venda: {
    type: String,
    required: true,
  },
  valor_total: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Venda', vendaSchema);
