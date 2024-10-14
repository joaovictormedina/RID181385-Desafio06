const Venda = require('../models/venda');

exports.createVenda = async (req, res) => {
  try {
    const novaVenda = new Venda(req.body);
    await novaVenda.save();
    res.status(201).json(novaVenda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVendas = async (req, res) => {
  try {
    const vendas = await Venda.find();
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
