function fahrenheitParaCelsius(temperaturaFahrenheit) {
    const temperaturaCelsius = (5 / 9) * (temperaturaFahrenheit - 32);
    console.log(`A temperatura de ${temperaturaFahrenheit}°F é equivalente a ${temperaturaCelsius.toFixed(2)}°C`);
}

// Exemplo de uso
const temperaturaFahrenheit = 212; // Substitua pela temperatura em Fahrenheit
fahrenheitParaCelsius(temperaturaFahrenheit);
