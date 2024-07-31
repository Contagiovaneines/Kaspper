/*
Exercício 08 - Reajuste de salário

Escreva um algoritmo para ler o salário mensal atual de um funcionário e 
o percentual de reajuste. Calcular e escrever o valor do novo salário.
*/
const salarioAtual = 1500; 
const percentualReajuste = 20; 
calcularNovoSalario(salarioAtual, percentualReajuste);

function calcularNovoSalario(salarioAtual, percentualReajuste) {
    const novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));
    console.log(`O novo salário, após um reajuste de ${percentualReajuste}%, é R$ ${novoSalario.toFixed(2)}`);
}


