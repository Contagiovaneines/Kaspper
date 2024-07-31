/*
Exercício 22 - Peso ideal

Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, 
calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:

inicio 
	ler nome 
	ler sexo 
	se sexo = M então 
		peso_ideal = (72.7 * altura) - 58 
	senão 
		peso_ideal = (62.1 * altura) – 44.7 
	fim_se 
	escrever peso_ideal 
fim
*/

let nome = "giovane";    // Nome da pessoa
let altura = 1.86;    // Altura em metros
let sexo = 'M';       // Sexo: 'M' para masculino ou 'F' para feminino

// Calcula o peso ideal com base no sexo
let pesoIdeal;

if (sexo === 'M') {
    // Fórmula para masculino
    pesoIdeal = (72.7 * altura) - 58;
} else {
    // Fórmula para feminino
    pesoIdeal = (62.1 * altura) - 44.7;
}

// Exibe o peso ideal
console.log(`${nome}, seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`);