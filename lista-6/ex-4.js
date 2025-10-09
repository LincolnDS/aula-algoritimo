const input = require('readline-sync');
let num_inicio = -1

while (num_inicio < 0) {
    num_inicio = input.questionInt('Digite um número --> ');
    if (num_inicio >= 0) {
        console.log('-----Contagem regressiva de',num_inicio,'até 0-----');
        for (num_inicio; num_inicio >= 0; num_inicio--) {
            console.log(num_inicio);
        }
        num_inicio = 1
    } else {
        console.log(num_inicio,'É menor que 0');
    }
}