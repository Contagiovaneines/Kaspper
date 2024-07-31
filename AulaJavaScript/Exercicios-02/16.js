/*
Exercício 16 - Média aritmética

Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e 
escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual 
ou maior que 6 o aluno é aprovado). Escrever também a média calculada.
*/

let nota1 = 7.5; // Nota da 1a. avaliação
let nota2 = 5.5; // Nota da 2a. avaliação

// Calcula a média aritmética simples
const media = (nota1 + nota2) / 2;

// Verifica se o aluno foi aprovado (nota média igual ou maior que 6)
if (media >= 6) {
    // Se a média for igual ou maior que 6, o aluno é aprovado
    console.log(`O aluno foi aprovado com a média de R$ ${media.toFixed(2)}.`);
} else {
    // Caso contrário, o aluno não foi aprovado
    console.log(`O aluno não foi aprovado. A média é R$ ${media.toFixed(2)}.`);
}
