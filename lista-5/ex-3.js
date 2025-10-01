const readlineSync = require("readline-sync");

let n1 = readlineSync.questionInt("Digite o primeiro numero: ");
let n2 = readlineSync.questionInt("Digite o segundo numero: ");
if (n1 > n2) {
  let temp = n1;
  n1 = n2;
  n2 = temp;
}
let numero = n1 + 1;
console.log(`Numeros entre ${n1} e ${n2}:`);
while (numero < n2) {
  console.log(numero);
  numero++;
}