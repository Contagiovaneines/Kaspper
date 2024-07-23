/* Pergunta: Crie um arquivo que faça cálculos, como salário + bonificação e preço x quantidade,
e informe o resultado no console. */ 

let salario = 3000;
let bonificacao = 500;
let preco = 50;
let quantidade = 10;

const salarioTotal = salario + bonificacao;
const totalVenda = preco * quantidade;

console.log(`Salário Total (com bonificação): R$ ${salarioTotal}`);
console.log(`Total das Vendas: R$ ${totalVenda}`);
