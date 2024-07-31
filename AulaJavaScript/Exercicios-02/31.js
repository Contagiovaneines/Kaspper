/*
Exercício 31 - Time vencedor

Ler o nome de 2 times e o número de gols marcados na partida (para cada time). 
Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/

let time1 = 'Time A';
let golsTime1 = 3;
let time2 = 'Time B';
let golsTime2 = 2;

// Determina o vencedor ou se houve empate
if (golsTime1 > golsTime2) {
    console.log(`O vencedor é ${time1}.`);
} else if (golsTime2 > golsTime1) {
    console.log(`O vencedor é ${time2}.`);
} else {
    console.log('EMPATE');
}
