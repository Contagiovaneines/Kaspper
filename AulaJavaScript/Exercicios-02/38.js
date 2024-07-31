/*
Faça um algoritmo para ler um número que é um código de usuário. 
Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) 
deve ser apresentada a mensagem ‘Usuário inválido!’. 
Caso o Código seja correto, deve ser lido outro valor que é a senha. 
Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. 
Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
*/

// Definindo o código e a senha armazenados internamente
const codigoCorreto = 1234;
const senhaCorreta = 9999;

// Lendo o código do usuário (simulando uma entrada)
const codigoUsuario = 1234; // Substitua pelo código que você deseja testar

// Verificando se o código do usuário está correto
if (codigoUsuario !== codigoCorreto) {
    console.log('Usuário inválido!');
} else {
    // Se o código estiver correto, lê a senha do usuário (simulando uma entrada)
    const senhaUsuario = 9999; 
    
    // Verificando se a senha está correta
    if (senhaUsuario !== senhaCorreta) {
        console.log('Senha incorreta!');
    } else {
        console.log('Acesso permitido!');
    }
}
