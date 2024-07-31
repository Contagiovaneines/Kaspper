/*
Exercício 06 - Cálculo da idade em dias

Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias 
e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 
dias e mês com 30 dias.
*/

var anos = 28;
var meses = 10;
var dias = 10;
var dias_por_ano = 365;
var dias_por_mes = 29; 

var idade_dias = (anos * dias_por_ano) + (meses * dias_por_mes) + dias;

// Escreve o resultado no console
console.log("Até esta data (31/07/2024) eu já vivi " + idade_dias + " dias");
