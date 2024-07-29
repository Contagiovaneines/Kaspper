function calcularCustoFinal(custoFabrica) {
    const percentualDistribuidor = 28; // Percentual do distribuidor
    const percentualImpostos = 45; // Percentual de impostos

    // Calcula o custo do distribuidor e dos impostos
    const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    const custoImpostos = custoFabrica * (percentualImpostos / 100);

    // Calcula o custo final ao consumidor
    const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

    console.log(`O custo final ao consumidor é R$ ${custoFinal.toFixed(2)}`);
}

// Exemplo de uso
const custoFabrica = 50000; // Substitua pelo custo de fábrica do carro
calcularCustoFinal(custoFabrica);
