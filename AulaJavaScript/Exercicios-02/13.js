/*
Exercício 13 - Maior ou Menor

Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido 
for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!
*/


let valorLido = 5;

// Converte o valor lido para um número (mesmo que já seja um número, esta etapa é útil para garantir a conversão correta)
let numero = Number(valorLido);

// Verifica se o número é maior que 10
if (numero > 10) {
    // Se o número for maior que 10, exibe a mensagem "É MAIOR QUE 10!"
    console.log("É MAIOR QUE 10!");
} else {
    // Caso contrário, exibe a mensagem "NÃO É MAIOR QUE 10!"
    console.log("NÃO É MAIOR QUE 10!");
}
