/*
if(condicao){
    // Se a condição for verdadeira, os comandos dentro deste bloco serão executados.
} else {
    // Se a condição for falsa, os comandos dentro deste bloco serão executados.
}
*/

// Exemplo de estrutura condicional if-else em JavaScript
let idade = 17;
var acompanhada = true;

if (idade >= 18) {
    // Se a idade for maior ou igual a 18, esta mensagem será exibida no console.
    console.log("Você é maior de idade e pode embarcar.");
} else if (idade < 18 && acompanhada == true) {
    // Se a idade for menor que 18 e estiver acompanhada, esta mensagem será exibida no console.
    console.log("Você é menor de idade, mas está acompanhada e pode embarcar.");
} else {
    // Se a idade for menor que 18 e não estiver acompanhada, esta mensagem será exibida no console.
    console.log("Você é menor de idade e não pode embarcar.");
}
