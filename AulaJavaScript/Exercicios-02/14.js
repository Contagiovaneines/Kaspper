/*
Exercício 14 - Positivo ou Negativo

Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
*/

let valorLido = 0;

// Converte o valor lido para um número (garante que o valor é tratado como número)
let numero = Number(valorLido);

// Verifica se o número é maior ou igual a 0 (positivo ou zero)
if (numero >= 0) {
    // Se o número for maior ou igual a 0, exibe a mensagem "O valor é positivo."
    console.log("O valor é positivo.");
} else {
    // Caso contrário, exibe a mensagem "O valor é negativo."
    console.log("O valor é negativo.");
}
