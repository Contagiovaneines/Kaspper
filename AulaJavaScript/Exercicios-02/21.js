/*
Exercício 21 - Hora extra + acréscimo

A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 

Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).
*/


let horasTrabalhadas = 180; // Total de horas trabalhadas no mês
let salarioPorHora = 20;    // Salário por hora regular

// Define a jornada de trabalho semanal e calcula o total de horas regulares no mês
let jornadaSemanal = 40;
let semanasNoMes = 4;
let horasRegularesNoMes = jornadaSemanal * semanasNoMes;

// Calcula o total de horas extras trabalhadas
let horasExtras = Math.max(0, horasTrabalhadas - horasRegularesNoMes);

// Calcula o salário com base nas horas trabalhadas e nas horas extras
let salarioRegular = horasRegularesNoMes * salarioPorHora;
let salarioHoraExtra = horasExtras * salarioPorHora * 1.5; // 50% a mais

// Calcula o salário total
let salarioTotal = salarioRegular + salarioHoraExtra;

// Exibe o salário total
console.log(`O salário total do funcionário é R$ ${salarioTotal.toFixed(2)}.`);
