/*
Exercício 19 - Ordem crescente

Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
*/

var valor1 = 15;
var valor2 = 8;

// Verifica e escreve os valores em ordem crescente
if (valor1 < valor2) {
    // Se valor1 for menor que valor2, exibe valor1 primeiro e valor2 depois
    console.log(`Ordem crescente: ${valor1}, ${valor2}`);
} else {
    // Caso contrário, exibe valor2 primeiro e valor1 depois
    console.log(`Ordem crescente: ${valor2}, ${valor1}`);
}
