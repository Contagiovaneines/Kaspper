/*
Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação.
Calcular a média de aproveitamento usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

Média_de_Aproveitamento = (N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios) / 7

A atribuição de conceitos obedece à tabela abaixo:

Média de Aproveitamento   | Conceito
--------------------------|---------
>=  9,0                   | A
>=  7,5 e <  9,0          | B
>=  6,0  e <  7,5         | C
<  6,0                    | D
*/

// Dados das notas e média dos exercícios
/*
Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação.
Calcular a média de aproveitamento usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

Média_de_Aproveitamento = (N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios) / 7

A atribuição de conceitos obedece à tabela abaixo:

Média de Aproveitamento   | Conceito
--------------------------|---------
>=  9,0                   | A
>=  7,5 e <  9,0          | B
>=  6,0  e <  7,5         | C
<  6,0                    | D
*/

// Dados das notas e média dos exercícios
let nota1 = 7.0;          // Nota 1
let nota2 = 8.5;          // Nota 2
let nota3 = 6.0;          // Nota 3
let mediaExercicios = 7.5; // Média dos exercícios

// Calcula a média de aproveitamento
const mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;

// Determina o conceito com base na média de aproveitamento
let conceito;
if (mediaAproveitamento >= 9.0) {
    conceito = 'A';
} else if (mediaAproveitamento >= 7.5) {
    conceito = 'B';
} else if (mediaAproveitamento >= 6.0) {
    conceito = 'C';
} else {
    conceito = 'D';
}

// Exibe os resultados
console.log(`Média de Aproveitamento: ${mediaAproveitamento.toFixed(2)}`);
console.log(`Conceito: ${conceito}`);
