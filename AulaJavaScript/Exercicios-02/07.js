/*
Exercício 07 - Porcentagem de votos

Escreva um algoritmo para ler o número total de eleitores de um município, 
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores. 
*/

// Definindo as variáveis com os valores fornecidos
var eleitores = 95018;         // Número total de eleitores
var votos_brancos = 4750.9;    // Número de votos brancos
var votos_nulos = 4750.9;      // Número de votos nulos
var votos_validos = 85516.2;   // Número de votos válidos

// Calculando os percentuais
var percentual_brancos = (votos_brancos / eleitores) * 100; // Percentual de votos brancos
var percentual_nulos = (votos_nulos / eleitores) * 100;     // Percentual de votos nulos
var percentual_validos = (votos_validos / eleitores) * 100; // Percentual de votos válidos

// Escrevendo os resultados no console
console.log("Total de eleitores: " + eleitores);            // Exibe o total de eleitores
console.log("Percentual de votos brancos: " + percentual_brancos.toFixed(2) + "%"); // Exibe o percentual de votos brancos
console.log("Percentual de votos nulos: " + percentual_nulos.toFixed(2) + "%");     // Exibe o percentual de votos nulos
console.log("Percentual de votos válidos: " + percentual_validos.toFixed(2) + "%"); // Exibe o percentual de votos válidos


// Exibe o percentual de votos brancos, nulos e válidos, formatando os resultados para duas casas decimais com toFixed(2).