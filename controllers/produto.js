const Produto = require('../models/produto');

exports.createProduto = async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
