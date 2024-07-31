/*
Exercício 10 - Salário com comissão

Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 

Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. 
*/
let numeroCarrosVendidos = 10; 
let valorTotalVendas = 200000; 
let salarioFixo = 3000; 
let comissaoPorCarro = 500; 

calcularSalarioFinal(numeroCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro);


function calcularSalarioFinal(numeroCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro) {
    let percentualComissaoVendas = 5; // Percentual da comissão sobre o valor das vendas

    // Calcula a comissão total por carros vendidos
    let comissaoTotalCarros = numeroCarrosVendidos * comissaoPorCarro;

    // Calcula a comissão percentual sobre o valor total das vendas
    let comissaoTotalVendas = valorTotalVendas * (percentualComissaoVendas / 100);

    // Calcula o salário final
    let salarioFinal = salarioFixo + comissaoTotalCarros + comissaoTotalVendas;

    console.log(`O salário final do vendedor é R$ ${salarioFinal.toFixed(2)}`);
}



