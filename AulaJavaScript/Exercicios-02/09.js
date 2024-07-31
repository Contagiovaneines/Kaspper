/*
Exercício 09 - Custo de um veículo

O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor 
e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% 
e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever 
o custo final ao consumidor. 
*/


let custoFabrica = 50000; 
calcularCustoFinal(custoFabrica);


function calcularCustoFinal(custoFabrica) {
    let percentualDistribuidor = 28; // Percentual do distribuidor
    let percentualImpostos = 45; // Percentual de impostos

    // Calcula o custo do distribuidor e dos impostos
    let custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    let custoImpostos = custoFabrica * (percentualImpostos / 100);

    // Calcula o custo final ao consumidor
    let custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

    console.log(`O custo final ao consumidor é R$ ${custoFinal.toFixed(2)}`);
}

