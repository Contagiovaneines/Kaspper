/*
Exercício 12 - Calcular média ponderada

Faça um algoritmo que leia três notas de um aluno, calcule e escreva 
a média final deste aluno. Considerar que a média é ponderada e que 
o peso das notas é 2, 3 e 5. 

Fórmula para o cálculo da média final é: NÃO TEM NO MATERIAL
*/
let nota1 = 7.5; // Substitua pela primeira nota
let nota2 = 8.0; // Substitua pela segunda nota
let nota3 = 6.5; // Substitua pela terceira nota

calcularMediaFinal(nota1, nota2, nota3);

function calcularMediaFinal(nota1, nota2, nota3) {
    let peso1 = 2;
    let peso2 = 3;
    let peso3 = 5;

    // Calcula a média final ponderada
    let mediaFinal = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

    console.log(`A média final do aluno é ${mediaFinal.toFixed(2)}`);
}


