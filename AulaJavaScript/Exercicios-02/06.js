function calcularIdadeEmDias(anos, meses, dias) {
    const diasEmAno = 365;
    const diasEmMes = 30;
    const idadeEmDias = (anos * diasEmAno) + (meses * diasEmMes) + dias;
    console.log(`A idade de ${anos} anos, ${meses} meses e ${dias} dias expressa em dias é ${idadeEmDias}`);
}

// Exemplo de uso
const anos = 25; // Substitua pelo número de anos
const meses = 6; // Substitua pelo número de meses
const dias = 15; // Substitua pelo número de dias
calcularIdadeEmDias(anos, meses, dias);
