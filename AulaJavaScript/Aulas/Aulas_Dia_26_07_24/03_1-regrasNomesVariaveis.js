/*
Regras de nomes de variáveis:

-> Pode conter letras, dígitos, underscore (_),
   símbolos de $.
   
-> Os nomes das variáveis podem ser iniciados por:
   letras, _, $.
   
-> São case-sensitive (nome é diferente de Nome ou NOME).

-> Não pode usar palavras reservadas (if, for, switch).

-> Evitar uso excessivo de underscores e símbolos de $.
   - Válido, mas desaconselhado: $$_variavel, __variavel

-> Nomear variáveis de forma descritiva.
   - Válido: numeroDeAlunos, nomeDoUsuario
   - Desaconselhado: n, x

-> Seguir convenções de nomenclatura.
   - camelCase para variáveis e métodos: numeroDeAlunos
   - PascalCase para classes: NomeDoUsuario

-> Evitar abreviações obscuras.
   - Válido: quantidadeDeAlunos
   - Desaconselhado: qtdAln

-> Tamanho dos nomes das variáveis.
   - Válido: numeroDeAlunos
   - Desaconselhado: n

-> Evitar nomes reservados para bibliotecas ou frameworks.
   - Evitar nomes que possam ser usados por frameworks como "data", "callback", etc.

Exemplos de nomes de variáveis válidos e recomendados:
- aluno
- $aluno
- _aluno
- aluno1
- Aluno
- aluno_nome
- numeroDeAlunos
- nomeDoUsuario
- totalDeVendas
- precoProduto

Exemplos de nomes de variáveis inválidos ou desaconselhados:
- @aluno  // Símbolo "@" não permitido
- 1aluno  // Não pode iniciar com dígito
- aluno-nome  // Símbolo "-" não permitido
- if  // Palavra reservada
- for  // Palavra reservada
- $$_variavel  // Uso excessivo de símbolos
- __variavel  // Uso excessivo de underscores
- qtdAln  // Abreviação obscura
- n  // Muito curto e não descritivo
*/
