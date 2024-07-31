/*
Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres 
(considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). 
Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, 
e o produto das idades do homem mais novo com a mulher mais velha.
*/

// Idade dos homens
var idadeHomemA = 20;
var idadeHomemB = 35;

// Idade das mulheres
var idadeMulherX = 15;
var idadeMulherY = 30;

// Encontrar a idade do homem mais velho e mais novo
var idadeHomemMaisNovo, idadeHomemMaisVelho;
if (idadeHomemA < idadeHomemB) {
    idadeHomemMaisNovo = idadeHomemA;
    idadeHomemMaisVelho = idadeHomemB;
} else {
    idadeHomemMaisNovo = idadeHomemB;
    idadeHomemMaisVelho = idadeHomemA;
}

// Encontrar a idade da mulher mais nova e mais velha
var idadeMulherMaisNova, idadeMulherMaisVelha;
if (idadeMulherX < idadeMulherY) {
    idadeMulherMaisNova = idadeMulherX;
    idadeMulherMaisVelha = idadeMulherY;
} else {
    idadeMulherMaisNova = idadeMulherY;
    idadeMulherMaisVelha = idadeMulherX;
}

// Calcular a soma das idades do homem mais velho com a mulher mais nova
var somaIdades = idadeHomemMaisVelho + idadeMulherMaisNova;

// Calcular o produto das idades do homem mais novo com a mulher mais velha
var produtoIdades = idadeHomemMaisNovo * idadeMulherMaisVelha;

// Exibir resultados
console.log("Soma das idades do homem mais velho com a mulher mais nova: " + somaIdades);
console.log("Produto das idades do homem mais novo com a mulher mais velha: " + produtoIdades);
