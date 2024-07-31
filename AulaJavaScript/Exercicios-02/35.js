/*
Exercício 34 - Posto de gasolina

Um posto está vendendo combustíveis com a seguinte tabela de descontos: 

----------------------------------------------------------
Álcool      | até 20 litros, desconto de 3% por litro
            |-----------------------------------------------
            | acima de 20 litros, desconto de 5% por litro 
----------------------------------------------------------
Gasolina    | até 20 litros, desconto de 4% por litro
            |-----------------------------------------------
            | acima de 20 litros, desconto de 6% por litro
----------------------------------------------------------

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina),
calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.
*/

// Função para calcular o valor a ser pago
function calcularValor(litros, tipo) {
    // Preços por litro
    let precoAlcool = 2.90;
    let precoGasolina = 3.30;

    // Descontos
    let desconto;
    
    // Calcula o valor base e aplica o desconto
    let precoPorLitro;
    
    if (tipo === 'A') { // Álcool
        precoPorLitro = precoAlcool;
        if (litros <= 20) {
            desconto = 0.03; // 3% de desconto
        } else {
            desconto = 0.05; // 5% de desconto
        }
    } else if (tipo === 'G') { // Gasolina
        precoPorLitro = precoGasolina;
        if (litros <= 20) {
            desconto = 0.04; // 4% de desconto
        } else {
            desconto = 0.06; // 6% de desconto
        }
    } else {
        console.log('Tipo de combustível inválido.');
        return;
    }

    // Calcula o valor total sem desconto
    let valorTotal = litros * precoPorLitro;
    
    // Aplica o desconto
    valorTotal -= valorTotal * desconto;
    
    // Exibe o valor a ser pago
    console.log(`O valor a ser pago é R$ ${valorTotal.toFixed(2)}.`);
}

calcularValor(25, 'A'); //  25 litros de álcool
calcularValor(15, 'G'); //  15 litros de gasolina
