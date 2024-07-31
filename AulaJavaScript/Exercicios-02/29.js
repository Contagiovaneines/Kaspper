/*
Exercício 29 - Valores em ordem crescente

Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.
*/

let valor1 = 22;
let valor2 = 5;
let valor3 = 18;

// Cria um array com os valores
let valores = [valor1, valor2, valor3];

// Ordena o array em ordem crescente
valores.sort((a, b) => a - b);

// Exibe os valores em ordem crescente
console.log(`Os valores em ordem crescente são ${valores.join(', ')}.`);
