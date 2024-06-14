exports.calcular = (numero1, numero2, operacao) => {
  switch (operacao) {
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case '*':
      return numero1 * numero2;
    case '/':
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        return 'Erro: Divisão por zero';
      }
    default:
      return 'Operação inválida';
  }
};
