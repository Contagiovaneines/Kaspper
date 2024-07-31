/*
Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário.
Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

- Se quantidade <= 5, o desconto será de 2%.
- Se quantidade > 5 e quantidade <= 10, o desconto será de 3%.
- Se quantidade > 10, o desconto será de 5%.
*/

// Dados do produto
const nomeProduto = "Produto Exemplo";
const quantidadeAdquirida = 7; // Quantidade adquirida
const precoUnitario = 10.00;  // Preço unitário

// Calcula o total sem desconto
const total = quantidadeAdquirida * precoUnitario;

// Determina o percentual de desconto com base na quantidade
let descontoPercentual;
if (quantidadeAdquirida <= 5) {
    descontoPercentual = 2; // 2% de desconto
} else if (quantidadeAdquirida <= 10) {
    descontoPercentual = 3; // 3% de desconto
} else {
    descontoPercentual = 5; // 5% de desconto
}

// Calcula o valor do desconto
const desconto = (descontoPercentual / 100) * total;

// Calcula o total a pagar após o desconto
const totalAPagar = total - desconto;

// Exibe os resultados
console.log(`Descrição do produto: ${nomeProduto}`);
console.log(`Quantidade adquirida: ${quantidadeAdquirida}`);
console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Total a pagar: R$ ${totalAPagar.toFixed(2)}`);
