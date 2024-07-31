/*
Exercício 28 - Somar os maiores números

Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
*/

let valor1 = 12;
let valor2 = 25;
let valor3 = 8;

// Determina o maior e o segundo maior valor
let maiorValor;
let segundoMaiorValor;

// Encontra o maior valor
if (valor1 > valor2 && valor1 > valor3) {
    maiorValor = valor1;
    segundoMaiorValor = Math.max(valor2, valor3);
} else if (valor2 > valor1 && valor2 > valor3) {
    maiorValor = valor2;
    segundoMaiorValor = Math.max(valor1, valor3);
} else {
    maiorValor = valor3;
    segundoMaiorValor = Math.max(valor1, valor2);
}

// Calcula a soma dos dois maiores valores
let somaDosMaiores = maiorValor + segundoMaiorValor;

// Exibe a soma dos dois maiores valores
console.log(`A soma dos dois maiores valores é ${somaDosMaiores}.`);
