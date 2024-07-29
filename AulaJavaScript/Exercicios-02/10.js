function calcularSalarioFinal(numeroCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro) {
    const percentualComissaoVendas = 5; // Percentual da comissão sobre o valor das vendas

    // Calcula a comissão total por carros vendidos
    const comissaoTotalCarros = numeroCarrosVendidos * comissaoPorCarro;

    // Calcula a comissão percentual sobre o valor total das vendas
    const comissaoTotalVendas = valorTotalVendas * (percentualComissaoVendas / 100);

    // Calcula o salário final
    const salarioFinal = salarioFixo + comissaoTotalCarros + comissaoTotalVendas;

    console.log(`O salário final do vendedor é R$ ${salarioFinal.toFixed(2)}`);
}

// Exemplo de uso
const numeroCarrosVendidos = 10; // Substitua pelo número de carros vendidos
const valorTotalVendas = 200000; // Substitua pelo valor total das vendas
const salarioFixo = 3000; // Substitua pelo salário fixo do vendedor
const comissaoPorCarro = 500; // Substitua pelo valor recebido por carro vendido

calcularSalarioFinal(numeroCarrosVendidos, valorTotalVendas, salarioFixo, comissaoPorCarro);
