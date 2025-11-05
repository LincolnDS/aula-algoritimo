//1️⃣1️⃣ Sequência de Fibonacci - Mostre os primeiros N termos da sequência de Fibonacci. (1, 1, 2, 3, 5, 8...)

const input = require('readline-sync');

let n = input.questionInt("Digite a quantidade de termos da sequencia de Fibonacci --> ");
let a = 1;
let b = 1;
console.log("Sequencia de Fibonacci");

if (n >= 1) {
    console.log(a);
    
}
if (n >= 2) {
    console.log(b);
    
}
for (let i = 3; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}