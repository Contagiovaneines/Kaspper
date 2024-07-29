function calcularPercentuais(totalEleitores, votosBrancos, votosNulos, votosValidos) {
    const percentualBrancos = (votosBrancos / totalEleitores) * 100;
    const percentualNulos = (votosNulos / totalEleitores) * 100;
    const percentualValidos = (votosValidos / totalEleitores) * 100;

    console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
    console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
    console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}

// Exemplo de uso
const totalEleitores = 1000; // Substitua pelo número total de eleitores
const votosBrancos = 150; // Substitua pelo número de votos brancos
const votosNulos = 50; // Substitua pelo número de votos nulos
const votosValidos = 800; // Substitua pelo número de votos válidos

calcularPercentuais(totalEleitores, votosBrancos, votosNulos, votosValidos);
