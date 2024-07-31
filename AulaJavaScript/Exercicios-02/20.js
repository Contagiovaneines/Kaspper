/*
Exercício 20 - Duração em horas

Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, 
sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração 
do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
*/


var horaInicio = 22; // Hora em que o jogo começou
var horaFim = 4;     // Hora em que o jogo terminou

// Calcula a duração do jogo
let duracao;

// Se a hora de fim for menor que a hora de início, o jogo terminou no dia seguinte
if (horaFim < horaInicio) {
    duracao = (24 - horaInicio) + horaFim;
} else {
    // Caso contrário, o jogo terminou no mesmo dia
    duracao = horaFim - horaInicio;
}

// Exibe a duração do jogo em horas
console.log(`A duração do jogo é de ${duracao} horas.`);
