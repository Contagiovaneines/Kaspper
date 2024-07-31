/*
Exercício 27 - O maior valor

Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
*/

let valor1 = 15;
let valor2 = 25;
let valor3 = 10;

// Determina o maior valor
let maiorValor;

if (valor1 > valor2 && valor1 > valor3) {
    maiorValor = valor1;
} else if (valor2 > valor1 && valor2 > valor3) {
    maiorValor = valor2;
} else {
    maiorValor = valor3;
}

// Exibe o maior valor
console.log(`O maior valor é ${maiorValor}.`);
