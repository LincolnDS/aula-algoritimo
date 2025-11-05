const input = require('readline-sync'); 

let limite = Number(input.question('Digite um numero final: '));

console.log(' Analise de Pares e Impares');
let numero = 1;
while (numero <= limite) {
    if (numero / 2 == Math.floor(numero / 2)) {
        console.log(numero + ' -> PAR');
    } else {
        console.log(numero + ' -> ÍMPAR');
    }
    numero++;
}