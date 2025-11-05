const input = require('readline-sync');

let limiteContagem = input.questionInt('Contar ate qual numero? ');
console.log('Contagem de 1 ate ' + limiteContagem + ':');
let numeroAtual = 1;
while (numeroAtual <= limiteContagem) {
    console.log(numeroAtual);
    numeroAtual++;
}