const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/venda');

router.post('/', vendaController.createVenda);

router.get('/', vendaController.getVendas);

module.exports = router;
