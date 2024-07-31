/*
Exercício 25 - Verificando estoque

Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. 
Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). 
Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.
*/

let quantidadeAtual = 50;   // Quantidade atual em estoque
let quantidadeMaxima = 100; // Quantidade máxima em estoque
let quantidadeMinima = 30;  // Quantidade mínima em estoque

// Calcula a quantidade média
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

// Verifica se a quantidade atual é suficiente
if (quantidadeAtual >= quantidadeMedia) {
    console.log('Não efetuar compra');
} else {
    console.log('Efetuar compra');
}
