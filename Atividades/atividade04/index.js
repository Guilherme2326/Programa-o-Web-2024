const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');

// Rotas para operações matemáticas
app.get('/somar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.somar(a, b);
  res.send(`A soma de ${a} e ${b} é ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.subtrair(a, b);
  res.send(`A diferença de ${a} e ${b} é ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.multiplicar(a, b);
  res.send(`O produto de ${a} e ${b} é ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.dividir(a, b);
  res.send(`A divisão de ${a} e ${b} é ${resultado}`);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
