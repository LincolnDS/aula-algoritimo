const input = require('readline-sync'); 

let numeroBase = Number(input.question('Qual tabuada voce quer ver? '));
console.log('--- Tabuada do ' + numeroBase + ' ---');
let multiplicador = 1;
while (multiplicador <= 10) {
    let resultado = numeroBase * multiplicador;
    console.log(numeroBase + ' x ' + multiplicador + ' = ' + resultado);
    multiplicador++
}