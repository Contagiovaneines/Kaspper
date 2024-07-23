/* Operadores matemáticos
= atribuição de valores
+ soma
- subtração
* multiplicação
/ divisão
% módulo (resto da divisão)
++ incremento
-- decremento
*/

let x = 10;
let y = 5;
let soma = x + y;
let multi = x * y;
let subtracao = x - y;
let divisao = x / y;
let modulo = x % y;
let resto = x % 3;
x++; // incremento: x agora é 11
y--; // decremento: y agora é 4

console.log("Soma: " + soma); // 15
console.log("Multiplicação: " + multi); // 50
console.log("Subtração: " + subtracao); // 5
console.log("Divisão: " + divisao); // 2
console.log("Módulo: " + modulo); // 0
console.log("Incremento de x: " + x); // 11
console.log("Decremento de y: " + y); // 4
console.log("Resto: " + resto); // 1