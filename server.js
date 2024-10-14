const express = require('express');
const connectDB = require('./database');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
mongoose.set('strictQuery', true); 

app.use(express.json());

const produtoRoutes = require('./routes/produto');
const vendaRoutes = require('./routes/venda');

app.use('/api/produtos', produtoRoutes);
app.use('/api/vendas', vendaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
