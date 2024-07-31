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

