/*
Seja o seguinte algoritmo:

inicio
    ler a, b, c
    se (a < b+c) e (b < a+c) e (c < a+b) então
        se (a = b) e (b = c) então
            mens  'Triângulo Equilátero'
        senão se (a = b) ou (b = c) ou (a = c) então
            mens  'Triângulo Isósceles'
        senão
            mens  'Triângulo Escaleno'
        fim_se
    senão
        mens  'Não é possível formar um triângulo'
    fim_se
    escrever mens
fim

Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:

Variáveis    | a | b | c | Mens
-------------|---|---|---|------------------------------
Teste 1      | 1 | 2 | 3 | Não é possível formar um triângulo
Teste 2      | 3 | 4 | 5 | Triângulo Escaleno
Teste 3      | 2 | 2 | 4 | Não é possível formar um triângulo
Teste 4      | 4 | 4 | 4 | Triângulo Equilátero
Teste 5      | 5 | 3 | 3 | Triângulo Isósceles
*/

function verificarTriangulo(a, b, c) {
    // Verificar se é possível formar um triângulo
    if (a < b + c && b < a + c && c < a + b) {
        // Verificar o tipo de triângulo
        if (a === b && b === c) {
            return 'Triângulo Equilátero';
        } else if (a === b || b === c || a === c) {
            return 'Triângulo Isósceles';
        } else {
            return 'Triângulo Escaleno';
        }
    } else {
        return 'Não é possível formar um triângulo';
    }
}

// Função para testar os casos fornecidos
function testarTriangulos() {
    const testes = [
        { a: 1, b: 2, c: 3 },
        { a: 3, b: 4, c: 5 },
        { a: 2, b: 2, c: 4 },
        { a: 4, b: 4, c: 4 },
        { a: 5, b: 3, c: 3 }
    ];

    testes.forEach((teste, index) => {
        const resultado = verificarTriangulo(teste.a, teste.b, teste.c);
        console.log(`Teste ${index + 1}: a = ${teste.a}, b = ${teste.b}, c = ${teste.c} => ${resultado}`);
    });
}

// Executar testes
testarTriangulos();
