function calcularMediaFinal(nota1, nota2, nota3) {
    const peso1 = 2;
    const peso2 = 3;
    const peso3 = 5;

    // Calcula a média final ponderada
    const mediaFinal = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

    console.log(`A média final do aluno é ${mediaFinal.toFixed(2)}`);
}

// Exemplo de uso
const nota1 = 7.5; // Substitua pela primeira nota
const nota2 = 8.0; // Substitua pela segunda nota
const nota3 = 6.5; // Substitua pela terceira nota

calcularMediaFinal(nota1, nota2, nota3);
