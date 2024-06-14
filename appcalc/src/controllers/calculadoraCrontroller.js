const path = require('path');
const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
  const { numero1, numero2, operacao } = req.body;

  if (isNaN(numero1) || isNaN(numero2)) {
    res.sendFile(path.join(__dirname, '../views/erro.html'));
  } else {
    const resultado = calculadora.calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    res.render(path.join(__dirname, '../views/resultado.html'), { resultado });
  }
};
