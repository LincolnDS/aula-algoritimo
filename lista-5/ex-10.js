const readlineSync = require("readline-sync")

let numero = readlineSync.questionInt("Digite um numero entre 5 e 10: ")
while (numero < 5 || numero > 10) {
  numero = readlineSync.questionInt("Valor invalido. Digite um numero entre 5 e 10: ")
}
console.log("O numero digitado foi " + numero)
