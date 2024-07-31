/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços:

               Até 5 Kg       Acima de 5 Kg
Morango        R$ 2,50/Kg     R$ 2,20/Kg
Maçã           R$ 1,80/Kg     R$ 1,50/Kg

Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00,
receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade
(em Kg) de morangos e a quantidade (em Kg) de maçãs adquiridas e escreva o valor a ser pago pelo cliente.
*/

// Função para calcular o valor a ser pago
function calcularValor(morangosKg, macasKg) {
    // Preços por Kg
    let precoMorangoAte5Kg = 2.50;
    let precoMorangoAcima5Kg = 2.20;
    let precoMacaAte5Kg = 1.80;
    let precoMacaAcima5Kg = 1.50;

    // Calcula o preço dos morangos
    let precoMorango;
    if (morangosKg <= 5) {
        precoMorango = morangosKg * precoMorangoAte5Kg;
    } else {
        precoMorango = morangosKg * precoMorangoAcima5Kg;
    }

    // Calcula o preço das maçãs
    let precoMaca;
    if (macasKg <= 5) {
        precoMaca = macasKg * precoMacaAte5Kg;
    } else {
        precoMaca = macasKg * precoMacaAcima5Kg;
    }

    // Calcula o valor total antes do desconto
    let valorTotal = precoMorango + precoMaca;

    // Aplica o desconto de 10% se o total ultrapassar R$ 25,00 ou se a quantidade total for maior que 8 Kg
    if (valorTotal > 25 || (morangosKg + macasKg) > 8) {
        valorTotal *= 0.90; // 10% de desconto
    }

    // Exibe o valor a ser pago
    console.log(`O valor a ser pago é R$ ${valorTotal.toFixed(2)}.`);
}

calcularValor(6, 3);  
calcularValor(3, 6);  
calcularValor(5, 5);  
