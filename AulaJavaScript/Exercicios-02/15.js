/*
Exercício 15 - Calcular compra

As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, 
e R$ 1,00 se forem compradas pelo menos 12. 
Escreva um programa que leia o número de maçãs compradas, calcule 
e escreva o custo total da compra.
*/

let numeroMacas = 15;

// Define o custo por maçã com base na quantidade comprada
let precoPorMaca;

if (numeroMacas < 12) {
    // Se o número de maçãs for menor que 12, o custo é R$ 1,30 por maçã
    precoPorMaca = 1.30;
} else {
    // Caso contrário, o custo é R$ 1,00 por maçã
    precoPorMaca = 1.00;
}

// Calcula o custo total da compra
let custoTotal = numeroMacas * precoPorMaca;

// Exibe o custo total da compra
console.log(`O custo total da compra é R$ ${custoTotal.toFixed(2)}.`);
