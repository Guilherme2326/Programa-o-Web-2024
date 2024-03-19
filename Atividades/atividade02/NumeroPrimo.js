function isPrime(n) {
    // Caso o número seja menor que 2, não é primo
    if (n < 2) {
        return false;
    }
    // Itera de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Se o número for divisível por qualquer número entre 2 e sua raiz quadrada, não é primo
        if (n % i === 0) {
            return false;
        }
    }
    // Se nenhum divisor foi encontrado, o número é primo
    return true;
}

// Solicitar ao usuário que insira um número
const number = parseInt(prompt("Por favor, insira um número inteiro positivo:"));

// Verificar se o número é primo e exibir o resultado
if (isNaN(number)) {
    console.log("Por favor, insira um número válido.");
} else {
    if (isPrime(number)) {
        console.log(`${number} é primo.`);
    } else {
        console.log(`${number} não é primo.`);
    }
}
