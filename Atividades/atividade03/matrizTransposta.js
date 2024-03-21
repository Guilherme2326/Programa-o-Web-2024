function transporMatriz(A) {
    // Imprimir a matriz original
    console.log("Matriz original:");
    imprimirMatriz(A);

    // Calcular a transposta da matriz
    const transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta.push([]);
        for (let j = 0; j < A.length; j++) {
            transposta[i].push(A[j][i]);
        }
    }

    // Imprimir a matriz transposta
    console.log("Matriz transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
    console.log("");
}

// Exemplo de uso
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matriz);
