/* Operadores Lógicos
&&  - E lógico (AND): Retorna true se ambas as expressões forem verdadeiras.
||  - OU lógico (OR): Retorna true se pelo menos uma das expressões for verdadeira.
!   - NÃO lógico (NOT): Retorna o valor oposto da expressão (inverte o valor lógico).
*/

// Definindo variáveis para exemplo
let a = 10, b = 4;
let f = a < b; // false, pois 10 não é menor que 4

console.log(f);

let idade = 14;
let acompanhada = true;

// Usando operador E lógico (AND)
if (idade > 18 && acompanhada == true) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

// Usando operador OU lógico (OR)
if (idade > 18 || acompanhada == true) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

// Usando operador NÃO lógico (NOT)
let maiorDeIdade = idade > 18;
let acompanhadoOuNao = !acompanhada;

if (maiorDeIdade && !acompanhada) {
    console.log("Pode entrar sem acompanhante");
} else if (!maiorDeIdade && acompanhadoOuNao) {
    console.log("Não pode entrar, nem acompanhada");
} else {
    console.log("Condições não atendidas");
}

// Exemplos adicionais com operadores lógicos
let x = 15;
let y = 25;
let z = 10;

// Operador E lógico (AND)
let resultadoAnd = (x > 10) && (y < 30); // true, ambas as condições são verdadeiras
console.log("Resultado E lógico (x > 10 && y < 30): " + resultadoAnd);

// Operador OU lógico (OR)
let resultadoOr = (x < 10) || (y > 20); // true, a segunda condição é verdadeira
console.log("Resultado OU lógico (x < 10 || y > 20): " + resultadoOr);

// Operador NÃO lógico (NOT)
let resultadoNot = !(x == z); // true, pois x não é igual a z
console.log("Resultado NÃO lógico (!(x == z)): " + resultadoNot);
