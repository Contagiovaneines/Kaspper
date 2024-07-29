/* Operadores de Comparação
==  - Igualdade: Retorna true se os valores forem iguais.
=== - Igualdade Estrita: Retorna true se os valores e os tipos forem iguais.
!=  - Diferente: Retorna true se os valores forem diferentes.
!== - Diferente Estrito: Retorna true se os valores ou os tipos forem diferentes.
>   - Maior que: Retorna true se o valor da esquerda for maior que o da direita.
<   - Menor que: Retorna true se o valor da esquerda for menor que o da direita.
>=  - Maior ou Igual a: Retorna true se o valor da esquerda for maior ou igual ao da direita.
<=  - Menor ou Igual a: Retorna true se o valor da esquerda for menor ou igual ao da direita.
*/

// Definindo variáveis para exemplo
let x = 10;
let y = 5;
let z = '10';

// Usando operador de igualdade
console.log("Igualdade (x == z): " + (x == z)); // true, pois o valor é igual, mas os tipos são diferentes

// Usando operador de igualdade estrita
console.log("Igualdade Estrita (x === z): " + (x === z)); // false, pois os tipos são diferentes

// Usando operador de diferente
console.log("Diferente (x != y): " + (x != y)); // true, pois x é diferente de y

// Usando operador de diferente estrito
console.log("Diferente Estrito (x !== z): " + (x !== z)); // true, pois os tipos são diferentes

// Usando operador maior que
console.log("Maior que (x > y): " + (x > y)); // true, pois x é maior que y

// Usando operador menor que
console.log("Menor que (y < x): " + (y < x)); // true, pois y é menor que x

// Usando operador maior ou igual a
console.log("Maior ou Igual a (x >= 10): " + (x >= 10)); // true, pois x é igual a 10

// Usando operador menor ou igual a
console.log("Menor ou Igual a (y <= 5): " + (y <= 5)); // true, pois y é igual a 5

// Exemplos adicionais com variáveis diferentes
let a = 20;
let b = 20;
let c = 30;

// Comparação entre variáveis
console.log("Igualdade (a == b): " + (a == b)); // true, pois a e b têm o mesmo valor
console.log("Maior que (a > c): " + (a > c)); // false, pois a não é maior que c
console.log("Menor ou Igual a (b <= c): " + (b <= c)); // true, pois b é menor ou igual a c
