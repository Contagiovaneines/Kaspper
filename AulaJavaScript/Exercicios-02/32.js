/*
Exercício 32 - Maior, Menor ou Igual

Ler dois valores e imprimir uma das três mensagens a seguir: 
    1. ‘Números iguais’, caso os números sejam iguais;
    2. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
    3. ‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/

let valor1 = 8;
let valor2 = 12;

// Compara os valores e imprime a mensagem apropriada
if (valor1 === valor2) {
    console.log('Números iguais');
} else if (valor1 > valor2) {
    console.log('Primeiro é maior');
} else {
    console.log('Segundo maior');
}
