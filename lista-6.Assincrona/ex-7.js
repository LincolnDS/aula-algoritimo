const input = require('readline-sync'); 

console.log('--- Maior e Menor Numero (Digite 0 para parar) ---');
let numeroDigitado = Number(input.question('Digite o 1o numero: '));
let maiorNumero = numeroDigitado;
let menorNumero = numeroDigitado;
while (numeroDigitado !== 0) {
    if (numeroDigitado > maiorNumero) {
        maiorNumero = numeroDigitado;
    }
    if (numeroDigitado < menorNumero) {
        menorNumero = numeroDigitado;
    }
    numeroDigitado = Number(input.question('Proximo numero: '));
}
console.log('-------------');
if (maiorNumero === 0 && menorNumero === 0) {
    console.log('Nenhum numero valido foi digitado.');
} else {
    console.log('MAIOR numero digitado: ' + maiorNumero);
    console.log('MENOR numero digitado: ' + menorNumero);
}