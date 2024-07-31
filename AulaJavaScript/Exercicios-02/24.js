/*
Exercício 24 - Conta bancária

Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). 
Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
*/


let numeroConta = 12345; // Número da conta do cliente
let saldo = 1000;        // Saldo inicial da conta
let debito = 200;        // Valor do débito
let credito = 300;       // Valor do crédito

// Calcula o saldo atual
let saldoAtual = saldo - debito + credito;

// Exibe o saldo atual
console.log(`O saldo atual da conta ${numeroConta} é R$ ${saldoAtual.toFixed(2)}.`);

// Verifica se o saldo atual é positivo ou negativo
if (saldoAtual >= 0) {
    console.log('Saldo Positivo');
} else {
    console.log('Saldo Negativo');
}
