/*
Para A = V (verdadeiro), B = V (verdadeiro) e C = F (falso), qual o resultado da avaliação das seguintes expressões:

1. (A e B) ou (A xou B)
   - Aqui, você deve avaliar a expressão de conjunção (e) e disjunção (ou) junto com a operação exclusiva (xou).

2. (A ou B) e (A e C)
   - Avalie a expressão de disjunção (ou) combinada com a conjunção (e).

3. A ou C e B xou A e não B
   - Avalie a expressão que combina disjunção (ou) e conjunção (e), junto com a operação exclusiva (xou) e negação (não).
*/
// Definição das variáveis
let A = true;  // Verdadeiro
let B = true;  // Verdadeiro
let C = false; // Falso

// 1. (A e B) ou (A xou B)
// Operadores: && (e), || (ou), ^ (xou)
let resultado1 = (A && B) || (A ^ B);

console.log("Resultado 1:", resultado1); // Esperado: true

// 2. (A ou B) e (A e C)
// Operadores: || (ou), && (e)
let resultado2 = (A || B) && (A && C);

console.log("Resultado 2:", resultado2); // Esperado: false

// 3. A ou C e B xou A e não B
// Operadores: || (ou), && (e), ^ (xou), ! (não)
let resultado3 = (A || C) && (B ^ A) && !B;

console.log("Resultado 3:", resultado3); // Esperado: false
