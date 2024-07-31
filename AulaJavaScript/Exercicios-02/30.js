/*
Exercício 30 - Forma triângulo?

Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. 
OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.
*/

let A = 5;
let B = 7;
let C = 10;

// Verifica se os valores formam um triângulo
let formaTriangulo = (A + B > C) && (A + C > B) && (B + C > A);

if (formaTriangulo) {
    console.log('Os valores formam um triângulo.');
} else {
    console.log('Os valores NÃO formam um triângulo.');
}
