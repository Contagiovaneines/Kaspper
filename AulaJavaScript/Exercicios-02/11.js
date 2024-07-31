/*
Exercício 11.1 - Conversor de temperatura (ºF para ºC)

Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever 
o valor correspondente em graus Celsius (baseado na fórmula abaixo):

  C 	 	F - 32  
----- = ------  
  5 	 	  9 	

Fórmula segundo google: F to C
(32 °F − 32) × 5/9 = °C
*/
let temperaturaFahrenheit = 212; // Substitua pela temperatura em Fahrenheit
fahrenheitParaCelsius(temperaturaFahrenheit);

function fahrenheitParaCelsius(temperaturaFahrenheit) {
    let temperaturaCelsius = (5 / 9) * (temperaturaFahrenheit - 32);
    console.log(`A temperatura de ${temperaturaFahrenheit}°F é equivalente a ${temperaturaCelsius.toFixed(2)}°C`);
}


