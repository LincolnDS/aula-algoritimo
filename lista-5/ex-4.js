const readlineSync = require("readline-sync");

let numero = readlineSync.questionInt("Digite um numero: ");
console.log("Tabuada do " + numero + ":");
let tabuada = 1;
while (tabuada <= 10) {
  console.log(numero + " x " + tabuada + " = " + (numero * tabuada));
  tabuada++;
}