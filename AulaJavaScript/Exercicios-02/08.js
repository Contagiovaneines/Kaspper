function calcularNovoSalario(salarioAtual, percentualReajuste) {
    const novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));
    console.log(`O novo salário, após um reajuste de ${percentualReajuste}%, é R$ ${novoSalario.toFixed(2)}`);
}

// Exemplo de uso
const salarioAtual = 3000; // Substitua pelo salário atual do funcionário
const percentualReajuste = 10; // Substitua pelo percentual de reajuste

calcularNovoSalario(salarioAtual, percentualReajuste);
