/*
Exercício 23 - Comissão de vendas

Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. 
Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 
mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.
*/

let salarioFixo = 2000; // Salário fixo do vendedor
let valorVendas = 2500; // Valor total das vendas realizadas

// Define os limites e as taxas de comissão
let limiteComissao = 1500;
let comissaoBaixa = 0.03; // 3%
let comissaoAlta = 0.05;  // 5%

// Calcula a comissão sobre as vendas
let comissao;
if (valorVendas <= limiteComissao) {
    // Comissão sobre o total das vendas, se estiver dentro do limite
    comissao = valorVendas * comissaoBaixa;
} else {
    // Comissão sobre o limite e sobre o valor que ultrapassa o limite
    let comissaoLimite = limiteComissao * comissaoBaixa;
    let comissaoExcedente = (valorVendas - limiteComissao) * comissaoAlta;
    comissao = comissaoLimite + comissaoExcedente;
}

// Calcula o salário total
let salarioTotal = salarioFixo + comissao;

// Exibe o salário total
console.log(`O salário total do vendedor é R$ ${salarioTotal.toFixed(2)}.`);
