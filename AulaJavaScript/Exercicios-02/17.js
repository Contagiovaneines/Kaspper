/*
Exercício 17 - Pode votar?

Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

let anoAtual = 2024;
let anoNascimento = 1995;

// Calcula a idade da pessoa
let idade = anoAtual - anoNascimento;

// Verifica se a pessoa pode votar (considerando que a idade mínima para votar é 16 anos)
if (idade >= 16) {
    // Se a idade for igual ou maior que 16, a pessoa pode votar
    console.log("Você pode votar este ano.");
} else {
    // Caso contrário, a pessoa não pode votar
    console.log("Você não pode votar este ano.");
}
